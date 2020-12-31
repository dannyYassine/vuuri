<template>
  <div id="code-demo-app">
    <div class="add-delete-buttons mb-2">
      <b-button class="mr-2" @click="onAddClicked()">Add</b-button>
      <b-button @click="onDeleteMoreClicked()">Delete</b-button>
    </div>
    <div class="vuuri-container">
      <vuuri
          :items="items"
          item-key="id"
          class-name="add-delete-demo-muuri-grid"
          :get-item-width="getItemWidth"
          :get-item-height="getItemHeight"
          :options="options"
      >
        <template #item="{ item }">
          <div class="demo-item" :style="{ backgroundColor: item.color }">
            <div class="grid-card-handle"></div>
            <b-button
                type="is-danger"
                class="delete-btn"
                @click="onDeleteClicked(item)"
            >&times;</b-button
            >
          </div>
        </template>
      </vuuri>
    </div>
  </div>
</template>

<script>
import vuuri from "vuuri";

export default {
  name: "App",
  components: {
    vuuri,
  },
  props: {
    min: {
      type: Number,
      required: false
    },
    max: {
      type: Number,
      required: false
    },
    startingItems: {
      type: Number,
      default: 15
    }
  },
  data() {
    return {
      count: 0,
      items: [],
      options: {
        showDuration: 400,
        showEasing: "ease",
        hideDuration: 400,
        hideEasing: "ease",
        layoutDuration: 400,
        layoutEasing: "cubic-bezier(0.625, 0.225, 0.100, 0.890)",
        sortData: {
          title(item, element) {
            return element.getAttribute("data-title") || "";
          },
          color(item, element) {
            return element.getAttribute("data-color") || "";
          },
        },
        dragEnabled: true,
        dragHandle: ".grid-card-handle",
        dragContainer: document.querySelector(".add-delete-demo-muuri-grid"),
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
      },
    };
  },
  methods: {
    onDeleteClicked(item) {
      const index = this.items.findIndex((value) => value.id === item.id);
      this.items.splice(index, 1);
    },
    onAddClicked() {
      this._buildItems();
    },
    onDeleteMoreClicked() {
      const numberOfTimesToDelete = Math.max(
          1,
          Math.floor(Math.random() * this.items.length)
      );
      console.log("numberOfTimesToDelete: ", numberOfTimesToDelete);
      for (let i = 0; i < numberOfTimesToDelete; i++) {
        const index = Math.floor(Math.random() * this.items.length);
        if (index < 0) {
          return;
        }
        console.log("index", index, this.items.length);
        this.items.splice(index, 1);
      }
    },
    getItemWidth(item) {
      return `${item.width}px`;
    },
    getItemHeight(item) {
      return `${item.height}px`;
    },
    getSize() {
      if (this.min && this.max) {
        return Math.floor(Math.random() * Math.max(this.min, this.max)) + Math.min(this.min, this.max);
      }

      const number = Math.random();
      if (number < 0.333) {
        return 75;
      }

      if (number < 0.666) {
        return 100;
      }

      return 125;
    },
    _buildItems(numberOfTimes = 4) {
      const numberOfItems = Math.max(
          1,
          Math.floor(Math.random() * numberOfTimes)
      );
      for (let i = 0; i < numberOfItems; i++) {
        this.items.push(this._buildItem());
      }
    },
    _addItems() {
      if (this.count > this.startingItems) {
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

  .add-delete-buttons {
    position: relative;
    top: 160px;
  }

  .vuuri-container {
    position: relative;
    top: 160px;
    height: 500px;
    max-height: 500px;
    overflow-y: scroll;
  }

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
      border-radius: 5px;
      height: 20px !important;
      width: 20px !important;
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
    .muuri-item {
      margin: 5px;
    }

    .muuri-item-placeholder {
      opacity: 0.5;
      margin: 0 !important;
    }
  }
}
</style>
