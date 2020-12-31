<template>
  <div ref="muuri" class="muuri-grid" :class="className">
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
import { GridEvent } from "./GridEvent";

export default {
  name: 'Vuuri',
  props: {
    /**
     * Optional class name to add to the grid. If not, one will be provided
     */
    className: {
      type: String,
      required: false,
      default: () => `class${uuidv4().replaceAll('-', '')}`
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
    /**
     * Collection to render
     */
    items: {
      type: Array,
      required: true
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
      default: () => () => '100px'
    },
    /**
     * Callback to fetch a dynamic height based on item
     */
    getItemHeight: {
      type: Function,
      required: false,
      default: () => () => '100px'
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
      events: {}
    }
  },
  watch: {
    items(newItems) {
      this._sync(newItems, this.copiedItems);
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
      this.muuri = new Muuri(this.selector, this.options);
      this.observer = new ResizeObserver(() => {
        this._resizeOnLoad();
      });
      this.observer.observe(this.$refs.muuri);
      this._sync(this.items, []);
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
      });
    },
    /**
     * Unregisters Muuri events
     */
    _unregisterEvents() {
      Object.values(GridEvent).forEach(event => {
        this.muuri.off(event, this.events[event]);
        delete this.events[event];
      });
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
        this._sync();
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
              item.getElement().getAttribute('data-item-key')
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
      const valuesToAdd = this._getDiff(newItems, oldItems);
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
          const $element = document.querySelector(`[data-item-key="${value[this.itemKey]}"]`);
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
    _copyItems(items = this.items) {
      this.copiedItems = cloneDeep(items);
    },
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
</style>