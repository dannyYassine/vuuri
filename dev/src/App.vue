<template>
  <div id="app">
    <img alt="Vue logo" height="200px" src="https://github.com/dannyYassine/vuuri/blob/master/.docs/.vuepress/public/vuuri_logo.png?raw=true">
    <button @click="onAddClicked()">Add</button>
    <button @click="onDeleteMoreClicked()">Delete one or more</button>
    <vuuri
        :items="items"
        item-key="id"
        :get-item-width="getItemWidth"
        :get-item-height="getItemHeight"
        :options="options"
    >
      <template #item="{ item }">
        <div class="demo-item" :style="{ backgroundColor: item.color }">
          <div class="grid-card-handle">
          </div>
          <div class="delete-btn" @click="onDeleteClicked(item)">delete</div>
        </div>
      </template>
    </vuuri>
  </div>
</template>

<script>
import vuuri from './components/Vuuri';

export default {
  name: 'App',
  components: {
    vuuri
  },
  data() {
    return {
      count: 0,
      items: [],
      options: {
        showDuration: 400,
        showEasing: 'ease',
        hideDuration: 400,
        hideEasing: 'ease',
        layoutDuration: 400,
        layoutEasing: 'cubic-bezier(0.625, 0.225, 0.100, 0.890)',
        sortData: {
          title(item, element) {
            return element.getAttribute('data-title') || '';
          },
          color(item, element) {
            return element.getAttribute('data-color') || '';
          },
        },
        dragEnabled: true,
        dragHandle: '.grid-card-handle',
        dragContainer: document.querySelector('.muuri-grid'),
        dragRelease: {
          duration: 400,
          easing: 'cubic-bezier(0.625, 0.225, 0.100, 0.890)',
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
        }
      }
    }
  },
  methods: {
    onDeleteClicked(item) {
      const index = this.items.findIndex(value => value.id === item.id);
      this.items.splice(index, 1);
    },
    onAddClicked() {
      this._buildItems();
    },
    onDeleteMoreClicked() {
      const numberOfTimesToDelete = Math.max(1, Math.floor(Math.random() * this.items.length));
      console.log('numberOfTimesToDelete: ', numberOfTimesToDelete);
      for (let i = 0; i < numberOfTimesToDelete; i++) {
        const index = Math.floor(Math.random() * this.items.length);
        if (index < 0) {
          return;
        }
        console.log('index', index, this.items.length);
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
      const numberOfItems = Math.max(1, Math.floor(Math.random() * numberOfTimes));
      for (let i = 0; i < numberOfItems; i++) {
        this.items.push(this._buildItem());
      }
    },
    _addItems() {
      if (this.count > 20) {
        return;
      }

      setTimeout(() => {
        this.count++
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
        height: this.getSize()
      }
    },
    _getColor() {
      const number = Math.random();
      if (number < 0.333) {
        return '#aaffdc';
      }

      if (number < 0.666) {
        return '#ff69ea';
      }

      return 'rgb(139, 152, 255)';
    }
  },
  mounted() {
    this._addItems();
  }
}

function makeid(length) {
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
</script>

<style scoped lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

  .demo-item {
    height: 100%;
    width: 100%;
    border-radius: 15px;

    .grid-card-handle {
      height: 100%;
    }

    .delete-btn {
      position: relative;
      top: -20px;
      display: none;
    }

    &:hover {
      .delete-btn {
        display: unset;
      }
    }
  }

  &::v-deep{
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
