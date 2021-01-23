<template>
  <div id="code-demo-app">
    <div class="mb-2">
      <b-button data-e2e="add-button" class="mr-2" @click="onAddClicked()">Add</b-button>
    </div>
    <vuuri
        v-model="items"
        item-key="id"
    >
      <template #item="{ item }">
        <div class="demo-item" :style="{ backgroundColor: item.color }">
          <div class="grid-card-handle"></div>
          <b-button
              data-e2e="delete-button"
              type="is-danger"
              class="delete-btn"
              @click="onDeleteClicked(item)"
          >&times;</b-button
          >
        </div>
      </template>
    </vuuri>
  </div>
</template>

<script>
import vuuri from "../vuuri";

export default {
  name: "AddDeleteDemo",
  components: {
    vuuri,
  },
  data() {
    return {
      count: 0,
      items: []
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
    _buildItems() {
      this.items.push(this._buildItem());
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
    this._buildItems();
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
