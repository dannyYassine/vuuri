<template>
  <div ref="muuri" class="muuri-grid" :class="className">
    <div
        v-for="item in copiedItems"
        :key="itemKey ? item[itemKey] : _getItemKey(item)"
        :style="_getItemStyles(item)"
        class="muuri-item"
        :data-item-key="itemKey ? item[itemKey] : _getItemKey(item)"
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
      required: false
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
      copiedItems: []
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
    update() {
      this.$nextTick(() => {
        this.muuri
            .refreshItems()
            .layout(true, () => this.$emit('updated'));
      });
    },
    /**
     * Styles for each grid item
     */
    _getItemStyles(item) {
      return {
        width: this.getItemWidth(item),
        height: this.getItemHeight(item)
      };
    },
    _getItemKey(item) {
      return Object.values(item).join('-')
    },
    _resizeOnLoad: debounce(function() {
      this.$nextTick(() => {
        this._sync();
      }, 100);
    }),
    _getDiff(newValue, oldValue) {
      return differenceWith(newValue, oldValue, (a, b) => {
        return a[this.itemKey] === b[this.itemKey];
      });
    },
    _sync(newItems, oldItems) {
      this._remove(newItems, oldItems).then(() => {
        this.update();

        this._add(newItems, oldItems);
      })
    },
    _remove(newItems, oldItems) {
      const valuesToRemove = this._getDiff(oldItems, newItems);
      if (valuesToRemove.length) {
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

        if (itemsToRemove.length) {
          return new Promise((resolve) => {
            this.muuri.hide(itemsToRemove, {
              onFinish: () => {
                valuesToRemove.forEach(value => {
                  const index = this.copiedItems.findIndex(item => item.id === value.id);
                  this.copiedItems.splice(index, 1);
                });
                this.muuri.remove(itemsToRemove);
                resolve();
              }
            });
          });
        }
      }

      return Promise.resolve();
    },
    _add(newItems, oldItems) {
      const valuesToAdd = this._getDiff(newItems, oldItems);

      // renders new elements
      this.copiedItems = this.copiedItems.concat(valuesToAdd);

      this.$nextTick(() => {
        if (valuesToAdd.length) {
          valuesToAdd.forEach(value => {
            const $element = document.querySelector(`[data-item-key="${value[this.itemKey]}"]`);
            this.muuri.add($element, {
              layout: false,
              active: false
            });
          });
        }
        this.muuri.filter(() => true);
      });
    },
    _copyItems(items = this.items) {
      this.copiedItems = cloneDeep(items);
    },
  },
  created() {
  },
  mounted() {
    this.muuri = new Muuri(this.selector, this.options);
    this.observer = new ResizeObserver(() => {
      this._resizeOnLoad();
    });
    this.observer.observe(this.$refs.muuri);
    this._sync(this.items, []);
  },
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