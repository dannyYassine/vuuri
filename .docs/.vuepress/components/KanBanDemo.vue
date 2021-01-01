<template>
  <div id="code-demo-app">
    <div class="columns">
      <div class="column">
        <div>
          <h2>TO DO</h2>
        </div>
        <div>
          <vuuri
              :items="todoItems"
              item-key="id"
              :get-item-height="getItemHeight"
              drag-enabled
              :group-id="1"
          >
            <template #item="{ item }">
              <div class="demo-item" :style="{ backgroundColor: item.color }">
                <div class="grid-card-handle"></div>
              </div>
            </template>
          </vuuri>
        </div>
      </div>
      <div class="column">
        <div>
          <h2>DONE</h2>
        </div>
        <div>
          <vuuri
              :items="doneItems"
              item-key="id"
              :get-item-height="getItemHeight"
              drag-enabled
              :group-ids="[1, 'deletable']"
          >
            <template #item="{ item }">
              <div class="demo-item" :style="{ backgroundColor: item.color }">
                <div class="grid-card-handle"></div>
              </div>
            </template>
          </vuuri>
        </div>
      </div>
      <div class="column">
        <div>
          <h2>BIN</h2>
          <h6>Only items from 'Done' can be dragged here</h6>
        </div>
        <div>
          <vuuri
              :items="[]"
              item-key="id"
              :get-item-height="getItemHeight"
              drag-enabled
              group-id="deletable"
          >
            <template #item="{ item }">
              <div class="demo-item" :style="{ backgroundColor: item.color }">
                <div class="grid-card-handle"></div>
              </div>
            </template>
          </vuuri>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import vuuri from "vuuri";

export default {
  name: "KanBanDemo",
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
    onDeleteClicked(item) {
      const index = this.todoItems.findIndex((value) => value.id === item.id);
      this.todoItems.splice(index, 1);
    },
    onAddClicked() {
      this._buildItems();
    },
    onDeleteMoreClicked() {
      const numberOfTimesToDelete = Math.max(
          1,
          Math.floor(Math.random() * this.todoItems.length)
      );
      console.log("numberOfTimesToDelete: ", numberOfTimesToDelete);
      for (let i = 0; i < numberOfTimesToDelete; i++) {
        const index = Math.floor(Math.random() * this.todoItems.length);
        if (index < 0) {
          return;
        }
        console.log("index", index, this.todoItems.length);
        this.todoItems.splice(index, 1);
      }
    },
    getItemHeight(item) {
      return `${item.height}px`;
    },
    getSize() {
      const number = Math.random();
      if (number < 0.333) {
        return 100;
      }

      if (number < 0.666) {
        return 150;
      }

      return 200;
    },
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
        name: makeid(2),
        color: this._getColor(),
        width: this.getSize(),
        height: this.getSize(),
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
#code-demo-app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 10px;

  .demo-item {
    position: relative;
    height: 100%;
    width: 100%;
    border-radius: 15px;
    cursor: move;
    .grid-card-handle {
      height: 100%;
    }

    .delete-btn {
      cursor: pointer;
      position: absolute;
      top: 10px;
      right: 10px;
      border-radius: 10px;
      height: 30px !important;
      width: 30px !important;
      padding: 0;
      transition: opacity 0.3s ease, transform 0.3s ease;
      opacity: 0;
      transform: scale(0.5);
    }

    &:hover {
      .delete-btn {
        opacity: 1;
        transform: scale(1);
      }
    }
  }

  &::v-deep {
    .muuri-grid {
      min-height: 100px;
      border: forestgreen 1px solid;
    }
    .muuri-item {
      margin: 5px 0;
      width: 100% !important;
    }
  }
}
</style>
