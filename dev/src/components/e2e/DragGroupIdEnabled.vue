<template>
  <div>
    Group Id Enabled
    <vuuri v-model="todoItems" class="group-1" drag-enabled group-id="group-1">
      <template #item="{ item }">
        <div class="item-content">
          {{ item.id }}
        </div>
      </template>
    </vuuri>
    <vuuri v-model="tododoItems" class="group-2" drag-enabled :group-ids="['group-1']">
      <template #item="{ item }">
        <div class="item-content">
          {{ item.id }}
        </div>
      </template>
    </vuuri>
    <vuuri v-model="binItems" class="group-3" drag-enabled :group-ids="['group-3']">
      <template #item="{ item }">
        <div class="item-content">
          {{ item.id }}
        </div>
      </template>
    </vuuri>
  </div>
</template>
<script>
import vuuri from '../../../../src';

export default {
  name: 'DragGroupIdEnabled',
  components: {
    vuuri
  },
  data() {
    return {
      todoItems: [],
      tododoItems: [],
      binItems: [this.buildItem({ id: 9999 })]
    };
  },
  methods: {
    _buildItems(numberOfItems = 5) {
      for (let i = 0; i < numberOfItems; i++) {
        this.todoItems.push(this.buildItem());
        this.tododoItems.push(this.buildItem());
      }
    },
    buildItem(props = {}) {
      return {
        id: props.id || this.todoItems.length + this.tododoItems.length + 1
      };
    }
  },
  created() {
    this._buildItems();
  }
};
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
