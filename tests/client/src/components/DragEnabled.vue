<template>
  <div>
    Drag Enabled
    <vuuri v-model="todoItems" drag-enabled>
      <template #item="{ item }">
        <div class="item-content">
          {{item.id}}
        </div>
      </template>
    </vuuri>
  </div>
</template>
<script>
import vuuri from "../vuuri";

export default {
name: "DragEnabled",
  components: {
    vuuri
  },
  data() {
    return {
      todoItems: [],
    }
  },
  methods: {
    _buildItems(numberOfItems = 4) {
      for (let i = 0; i < numberOfItems; i++) {
        this.todoItems.push(this.buildItem());
      }
    },
    buildItem() {
      return {
        id: this.todoItems.length
      };
    },
  },
  created() {
    this._buildItems(20);
    window.addEventListener('trigger', () => {
      window.dispatchEvent(new PointerEvent('pointermove', { pointerId: 1, clientX: 160, clientY: 85 }));
      window.dispatchEvent(new PointerEvent('pointerup', { pointerId: 1 }));
    })
  }
}
</script>

<style scoped lang="scss">
  div {
    &::v-deep {
      .muuri-item {
        background-color: green;
        margin: 5px;
      }
    }
    .item-content {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
</style>