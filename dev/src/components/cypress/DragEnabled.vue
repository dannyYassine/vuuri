<template>
  <vuuri v-model="todoItems" drag-enabled>

  </vuuri>
</template>
<script>
import vuuri from "/@/vuuri";

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
    _buildItems(numberOfTimes = 4) {
      const numberOfItems = Math.max(
          1,
          Math.floor(Math.random() * numberOfTimes)
      );
      for (let i = 0; i < numberOfItems; i++) {
        this.todoItems.push(this._buildItem());
      }
    },
    _addItems() {
      if (this.count > 10) {
        return;
      }

      setTimeout(() => {
        this.count++;
        this._buildItems(1);
        this._addItems();
      }, 150);
    },
    _buildItem() {
      return {
        id: Math.random(),
        width: this.getSize(),
        height: this.getSize(),
      };
    },
  }
}
</script>

<style scoped>

</style>