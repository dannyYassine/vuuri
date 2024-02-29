<template>
  <div id="groups-example">
    <div class="columns">
      <div class="column">
        <vuuri
            v-model="todoItems"
            item-key="id"
            drag-enabled
            group-id="board"
        >
          <template #item="{ item }">
            <div class="demo-item" :style="{ border: `4px ${item.color} solid`, backgroundColor: 'white' }">
              {{item.name}}
            </div>
          </template>
        </vuuri>
      </div>
      <div class="column">
        <vuuri
            v-model="doneItems"
            item-key="id"
            drag-enabled
            group-id="board"
        >
          <template #item="{ item }">
            <div class="demo-item" :style="{ border: `4px ${item.color} solid`, backgroundColor: 'white' }">
              {{item.name}}
            </div>
          </template>
        </vuuri>
      </div>
    </div>
  </div>
</template>

<script>
import vuuri from "../../../src";

export default {
  name: "SimpleGroup",
  components: {
    vuuri,
  },
  data() {
    return {
      count: 0,
      todoItems: [],
      doneItems: []
    };
  },
  methods: {
    _buildItems(numberOfTimes = 4) {
      const numberOfItems = Math.max(
          1,
          Math.floor(Math.random() * numberOfTimes)
      );
      for (let i = 0; i < numberOfItems; i++) {
        this.todoItems.push(this._buildItem());
        this.doneItems.push(this._buildItem());
      }
    },
    _addItems() {
      if (this.count > 3) {
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
        name: makeid(2),
        color: this._getColor()
      };
    },
    _getColor() {
      const number = Math.random();
      if (number < 0.333) {
        return "#aaffdc";
      }

      if (number < 0.666) {
        return "#ff69ea";
      }

      return "rgb(139, 152, 255)";
    },
  },
  mounted() {
    this._addItems();
  },
};

function makeid(length) {
  var result = "";
  var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
</script>

<style scoped lang="scss">
#groups-example {
  text-align: center;

  .demo-item {
    position: relative;
    height: 100%;
    width: 100%;
    border-radius: 15px;
    cursor: move;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &::v-deep {
    .muuri-grid {
      min-height: 400px;
      border-radius: 20px;
      border: forestgreen solid 5px;
    }

    .muuri-item {
      width: 100% !important;
      padding: 5px;
    }
  }
}
</style>
