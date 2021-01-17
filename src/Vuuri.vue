<template>
  <div ref="muuri" class="muuri-grid" :class="className" :data-grid-key="gridKey">
    <div
        v-for="item in copiedItems"
        :key="item[itemKey]"
        :style="_getItemStyles(item)"
        class="muuri-item"
        :data-item-key="item[itemKey]"
    >
      <div class="muuri-item-content">
        <slot name="item" :item="item" />
      </div>
    </div>
  </div>
</template>

<script>
import { cloneDeep, debounce, differenceWith } from 'lodash';
import Muuri from 'muuri';
import { v4 as uuidv4 } from 'uuid';
import { GridEvent } from './GridEvent';
import GridStore from './GridStore';
import { Env } from './Env';

export default {
  name: 'Vuuri',
  props: {
    /**
     * Optional class name to add to the grid. If not, one will be provided
     */
    className: {
      type: String,
      required: false,
      default: () => `class${uuidv4().replace(/-/g, '')}`
    },
    /**
     * To set up options of the grid
     * https://github.com/haltu/muuri#grid-options
     */
    options: {
      type: Object,
      required: false,
      default: () => ({})
    },
    value: {
      type: Array,
      required: false
    },
    /**
     * Collection to render
     */
    items: {
      type: Array,
      required: false
    },
    /**
     * Identifier property for each item
     */
    itemKey: {
      type: String,
      required: false,
      default: () => '_$muuri_id'
    },
    /**
     * Callback to fetch a dynamic width based on item
     */
    getItemWidth: {
      type: Function,
      required: false,
      default: () => '100px'
    },
    /**
     * Callback to fetch a dynamic height based on item
     */
    getItemHeight: {
      type: Function,
      required: false,
      default: () => '100px'
    },
    /**
     * Enable drag and drop feature on the grid
     */
    dragEnabled: {
      type: Boolean,
      required: false,
      default: false
    },
    dragHandle: {
      type: String,
      required: false,
      default: '.muuri-item:first-child'
    },
    /**
     * When dragEnabled is on, can control which other grid you can drag into
     */
    groupId: {
      type: [String, Number],
      required: false
    },
    /**
     * When dragEnabled is on, can control which other grid you can drag into
     */
    groupIds: {
      type: [Array],
      required: false
    }
  },
  data() {
    return {
      /**
       * Deep copy of props items
       * @type Array<*>
       */
      copiedItems: [],
      /**
       * Map of events with respective listener function
       * @type Object.<string, function>
       */
      events: {},
      /*
      * The generated Muuri Options object
      */
      muuriOptions: {}
    }
  },
  watch: {
    value(newItems) {
      if (!this.internallySet) {
        this._sync(newItems, this.copiedItems);
      }
    }
  },
  computed: {
    selector() {
      return `.${this.className}`;
    }
  },
  methods: {
    /**
     * Manually update the items in the muuri grid
     */
    update() {
      this.$nextTick(() => {
        this.muuri
            .refreshItems()
            .layout(true, () => this.$emit('updated'));
      });
    },
    /**
     * Prepares the muuri instance
     * @private
     */
    _setup() {
      this.muuri = new Muuri(this.selector, this.muuriOptions);
      if (this.groupId) {
        GridStore.addGrid(this.groupId, this.muuri);
      }
      if (this.groupIds) {
        GridStore.addGridToGroups(this.groupIds, this.muuri);
      }
      if (!Env.isUnitTesting) {
        this.observer = new ResizeObserver(() => {
          this._resizeOnLoad();
        });
        this.observer.observe(this.$refs.muuri);
      }
      this.settingUp = true;
      this._sync(this.value, []);
      this.$nextTick(() => {
        GridStore.setItemsForGridId(this.gridKey, this.value);
      });
    },
    _setupNonReactiveProps() {
      /**
       * @type {Muuri}
       */
      this.muuri = undefined;
      /**
       * @type {ResizeObserver}
       */
      this.observer = undefined;
      /**
       * @type {string}
       */
      this.gridKey = uuidv4().replace(/-/g, '')
    },
    _setupOptions() {
      if (this.dragEnabled) {
        this.muuriOptions = {...this._generateDragOptions(), ...this.muuriOptions};
      }
      if (this.groupId || this.groupIds) {
        let groupIds = [];
        if (this.groupId) {
          groupIds.push(this.groupId);
        }
        if (this.groupIds) {
          groupIds = groupIds.concat(this.groupIds);
        }
        this.muuriOptions.dragSort = () => {
          return GridStore.getGrids(groupIds);
        };
      }
      this.muuriOptions = {...this.options, ...this.muuriOptions};
    },
    _generateDragOptions() {
      return {
        dragEnabled: true,
          dragHandle: this.dragHandle,
          dragContainer: document.querySelector(`.muuri-grid${this.selector}`),
          dragRelease: {
          duration: 400,
          easing: "cubic-bezier(0.625, 0.225, 0.100, 0.890)",
          useDragContainer: true,
        },
        dragPlaceholder: {
          enabled: true,
          createElement(item) {
            return item.getElement().cloneNode(true);
          },
        },
        dragAutoScroll: {
          targets: [window],
            sortDuringScroll: false,
            syncAfterScroll: false,
        },
      };
    },
    /**
     * Registers Muuri events
     */
    _registerEvents() {
      Object.values(GridEvent).forEach(event => {
        this.events[event] = (...args) => {
          this.$emit(event, ...args);
        }
        this.muuri.on(event, this.events[event]);

        if (event === GridEvent.dragStart) {
          this.muuri.on(event, this._onDragStart)
        }
        if (event === GridEvent.send) {
          this.muuri.on(event, this._onItemSend);
        }
        if (event === GridEvent.receive) {
          this.muuri.on(event, this._onItemReceive);
        }
        if (event === GridEvent.move) {
          this.muuri.on(event, this._onItemMove);
        }
        if (event === GridEvent.dragEnd) {
          this.muuri.on(event, this._onDragEnd);
        }
      });
    },
    /**
     * Unregister Muuri events
     */
    _unregisterEvents() {
      Object.values(GridEvent).forEach(event => {
        this.muuri.off(event, this.events[event]);
        delete this.events[event];
      });
    },
    _onDragStart(item) {
      GridStore.setDraggingGridItem(item);
    },
    _onItemMove({ item }) {
      this._reOrderWithItem(item);
    },
    _onItemSend({ item }) {
      const index = this.value.findIndex(value => value.id == item.getElement().dataset.itemKey);
      const removedItem = this.value.splice(index, 1)[0];
      GridStore.setDraggingItem(removedItem);
      this._emitValue(this.value);
    },
    _onItemReceive() {
      const vuuriItem = GridStore.getDraggingItem();
      this.value.push(vuuriItem);
      this._reOrderWithItem(GridStore.getDraggingGridItem())
    },
    _onDragEnd() {
      GridStore.setDraggingGridItem(null);
      GridStore.setDraggingItem(null);
    },
    _reOrderWithItem(item) {
      const $grid = item.getGrid();

      let i = 0
      const itemKeys = $grid.getItems().reduce((accum, item) => {
        accum[item.getElement().dataset.itemKey] = i;
        i += 1;
        return accum;
      }, {});

      const value = this.value.reduce((accum, a) => {
        accum[itemKeys[a[this.itemKey]]] = a;
        return accum
      }, []);

      this._emitValue(value);
    },
    /**
     * Styles for each grid item
     * @private
     */
    _getItemStyles(item) {
      return {
        width: this.getItemWidth(item),
        height: this.getItemHeight(item)
      };
    },
    /**
     * Creates a unique identifier for the item based its property values
     * and adds a uuid
     * @param item
     * @returns {string}
     * @private
     */
    _generateItemKey(item) {
      item._$muuri_id = uuidv4();
    },
    /**
     * Callback used to resize the muuri grid
     * @private
     */
    _resizeOnLoad: debounce(function() {
      this.$nextTick(() => {
        this.update();
      }, 100);
    }),
    /**
     * Returns the difference between the two arrays
     * @param {Array<*>} newValue
     * @param {Array<*>} oldValue
     * @returns {Array<*>}
     * @private
     */
    _getDiff(newValue, oldValue) {
      return differenceWith(newValue, oldValue, (a, b) => {
        return a[this.itemKey] === b[this.itemKey];
      });
    },
    /**
     * Apply items updates on muuri
     * @param {?Array<*>} newItems
     * @param {?Array<*>} oldItems
     * @private
     */
    _sync(newItems = null, oldItems = null) {
      if (!newItems || !oldItems) {
        return;
      }

      this._remove(newItems, oldItems)
          .then(() => {
            this.update();
            this._add(newItems, oldItems);
            GridStore.setItemsForGridId(this.gridKey, this.copiedItems);
          })
    },
    /**
     * Remove deleted items from muuri
     * @param {Array<*>}  newItems
     * @param {Array<*>}  oldItems
     * @returns {Promise<void>}
     * @private
     */
    _remove(newItems, oldItems) {
      const valuesToRemove = this._getDiff(oldItems, newItems);
      if (!valuesToRemove.length) {
        return Promise.resolve();
      }

      const itemsToRemove = []
      valuesToRemove.forEach(value => {
        const itemToRemove = this.muuri.getItems().find(item => {
          return (
              value[this.itemKey]+'' ===
              item.getElement().dataset.itemKey
          );
        });

        if (itemToRemove) {
          itemsToRemove.push(itemToRemove)
        }
      });

      if (!itemsToRemove.length) {
        return Promise.resolve();
      }

      return new Promise((resolve) => {
        this.muuri.hide(itemsToRemove, {
          onFinish: () => {
            this.muuri.remove(itemsToRemove);

            valuesToRemove.forEach(value => {
              const index = this.copiedItems.findIndex(item => item.id === value.id);
              this.copiedItems.splice(index, 1);
            });

            resolve();
          }
        });
      });
    },
    /**
     * Add new items to muuri
     * @param newItems
     * @param oldItems
     * @private
     */
    _add(newItems, oldItems) {
      let valuesToAdd = this._getDiff(newItems, oldItems);
      valuesToAdd = this._getDiff(valuesToAdd, this.copiedItems); // sync from setup and watch may overlap
      if (!valuesToAdd.length) {
        return;
      }

      if (this.itemKey === '_$muuri_id') {
        valuesToAdd.forEach(item => this._generateItemKey(item));
      }

      // renders new elements
      this.copiedItems = this.copiedItems.concat(valuesToAdd);

      this.$nextTick(() => {
        valuesToAdd.forEach(value => {
          const $element = document.querySelector(`${this.selector} [data-item-key="${value[this.itemKey]}"]`);
          this.muuri.add($element, {
            layout: false,
            active: false
          });
        });
        this.muuri.filter(() => true);
      });
    },
    /**
     * Create a copy of the items from the vue props
     * @param items
     * @private
     */
    _copyItems(items = this.value) {
      this.copiedItems = cloneDeep(items);
    },
    _emitValue(value) {
      this.internallySet = true;
      this.$emit('input', value);
      this.$nextTick(() => {
        this.internallySet = false;
        GridStore.setItemsForGridId(this.gridKey, this.value);
      });
    }
  },
  created() {
    this._setupNonReactiveProps();
    this._setupOptions();
  },
  mounted() {
    this._setup();
    this._registerEvents();
  },
  beforeDestroy() {
    this._unregisterEvents();
  }
}
</script>

<style scoped>
.muuri-grid {
  position: relative;
}
.muuri-item {
  display: block;
  position: absolute;
  z-index: 1;
}
.muuri-item.muuri-item-dragging {
  z-index: 3;
}
.muuri-item.muuri-item-releasing {
  z-index: 2;
}
.muuri-item.muuri-item-hidden {
  z-index: 0;
}
.muuri-item-content {
  position: relative;
  width: 100%;
  height: 100%;
}
.muuri-item-placeholder {
  opacity: 0.5;
  margin: 0 !important;
}
</style>