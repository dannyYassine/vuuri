<template>
  <div class="vuuri-container">
    <vuuri
        v-if="items"
        v-model="items"
        drag-enabled
    >
      <template #item="{ item }">
        <div class="demo-item grid-card-handle" :style="{backgroundColor: item.color}">
          <img v-if="item.largeImageURL" :src="item.largeImageURL" />
        </div>
      </template>
    </vuuri>
    <b-loading v-else active :is-full-page="false" />
  </div>
</template>

<script>
import vuuri from "../../../src";

export default {
  name: "ImageList",
  components: {
    vuuri
  },
  props: {
    cancelImage: {
      type: String
    }
  },
  data() {
    return {
      items: null
    }
  },
  methods: {
    loadImages() {
      fetch("https://pixabay.com/api/?key=19717761-c2148f00739ef736cb8c5ce98&q=montreal&image_type=photo&pretty=true")
        .then(response => response.json())
        .then(data => this.items = data.hits)
        .catch(() => {
          this._createItems();
        });
    },
    _createItems() {
      const items = [];
      for (let i = 0; i < 20; i++) {
        items.push({
          color: this._getColor()
        });
      }
      this.items = items;
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
    if (!this.cancelImage) {
      this.loadImages();
    } else {
      this._createItems();
    }
  }
}
</script>

<style scoped lang="scss">
.vuuri-container {
  min-height: 200px;
  width: 100%;
  position: relative;

  &::v-deep {
    .muuri-item {
      height: 100px;
      width: 100px;
      margin: 5px;
      cursor: move;
    }
    .muuri-item-placeholder {
      opacity: 0.5;
      margin: 0 !important;
    }
  }
}

.demo-item {
  width: 100%;
  height: 100%;
  border-radius: 5px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    user-select: none;
    pointer-events: none;
  }
}
</style>