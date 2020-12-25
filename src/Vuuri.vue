<template>
  <div ref="muuri" class="muuri-grid" :class="element">
    <div
        v-for="item in items"
        :key="item[itemKey]"
        class="free-flow-grid-item item"
    >
      <slot name="item" :item="item" />
    </div>
  </div>
</template>

<script>
import { cloneDeep, debounce } from 'lodash';
import Muuri from 'muuri';
import { v4 as uuidv4 } from 'uuid';

export default {
  name: 'Vuuri',
  props: {
    /**
     * Selector to identity grid
     */
    element: {
      type: [String, Element],
      default: () => uuidv4()
    },
    /**
     * To set up options of the grid
     * https://github.com/haltu/muuri#grid-options
     */
    options: {
      type: Object,
      default: () => ({})
    },
    /**
     * Collection to render
     */
    items: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      _items: null
    }
  },
  watch: {
    items(newItems, oldItems) {
      this._sync(newItems, oldItems);
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
    _resizeOnLoad: debounce(function() {
      this.$nextTick(() => {
        this._sync();
      }, 100);
    }),
    _sync(newItems, oldItems) {
      // create diff
      // remove
      // add
    },
    _copyItems(items = this.items) {
      this._items = cloneDeep(items);
    },
  },
  mounted() {
    this.muuri = new Muuri(this.element, this.options);
    this.observer = new ResizeObserver(() => {
      this._resizeOnLoad();
    });
    this.observer.observe(this.$refs.muuri);
  },
}
</script>

<style scoped lang="scss">

</style>