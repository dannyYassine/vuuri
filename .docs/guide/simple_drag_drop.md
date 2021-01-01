# Drag and Drop

You simply need to add the `drag-enabled` attribute on the `vuuri` component to add this feature.

```vue
<template>
  <vuuri
    :items="items"
    drag-enabled />
</template>
```

## Example
<br>

<ClientOnly>
  <ImageList />
</ClientOnly>

## Code

```vue
<template>
  <div class="vuuri-container">
    <vuuri
        v-if="items"
        :items="items"
        drag-enabled
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
      items: null
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