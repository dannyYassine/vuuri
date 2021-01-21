<template>
  <div>
    Group Id Enabled
    <vuuri v-model="todoItems" class="group-1" drag-enabled group-id="group-1">
      <template #item="{ item }">
        <div class="item-content">
          {{item.id}}
        </div>
      </template>
    </vuuri>
    <vuuri v-model="tododoItems" class="group-2" drag-enabled :group-ids="['group-1']">
      <template #item="{ item }">
        <div class="item-content">
          {{item.id}}
        </div>
      </template>
    </vuuri>
    <vuuri v-model="binItems" class="group-3" drag-enabled :group-ids="['group-3']">
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
      tododoItems: [],
      binItems: [this.buildItem()],
    }
  },
  methods: {
    _buildItems(numberOfItems = 4) {
      for (let i = 0; i < numberOfItems; i++) {
        this.todoItems.push(this.buildItem());
        this.tododoItems.push(this.buildItem());
      }
    },
    buildItem() {
      return {
        id: Math.random()
      };
    },
  },
  created() {
    this._buildItems(3);
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