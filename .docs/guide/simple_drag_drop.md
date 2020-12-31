# Drag and Drop

The configuration below illustrates a basic options configuration to add drag and drop functionality with Muuri. All other configurable options can be located [here](https://github.com/haltu/muuri#grid-options).

```javascript
options: {
    showDuration: 400,
    showEasing: "ease",
    hideDuration: 400,
    hideEasing: "ease",
    layoutDuration: 400,
    layoutEasing: "cubic-bezier(0.625, 0.225, 0.100, 0.890)",
    dragEnabled: true,
    dragHandle: ".grid-card-handle",
    dragContainer: document.querySelector(".muuri-grid"),
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
      syncAfterScroll: false
    }
}
```

Granted that the *dragHandle* `.grid-card-handle` is located on your grid item.

## Example
<br>

<ClientOnly>
  <ImageList />
</ClientOnly

## Code

```vue
<template>
  <div class="vuuri-container">
    <vuuri
        v-if="items"
        :items="items"
        :options="options"
    >
      <template #item="{ item }">
        <div class="demo-item grid-card-handle">
          <img :src="item.largeImageURL" />
        </div>
      </template>
    </vuuri>
  </div>
</template>

<script>
import vuuri from "vuuri";

export default {
  name: "ImageList",
  components: {
    vuuri
  },
  data() {
    return {
      items: null,
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
        dragContainer: document.querySelector(".vuuri-container"),
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
    }
  },
  methods: {
    loadImages() {
      fetch("https://pixabay.com/api/?key=<api_key>&q=montreal&image_type=photo&pretty=true")
          .then(response => response.json())
          .then(data => this.items = data.hits);
    }
  },
  mounted() {
    this.loadImages();
  }
}
</script>

<style scoped lang="scss">
.vuuri-container {
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

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    user-select: none;
    pointer-events: none;
  }
}
</style>
```