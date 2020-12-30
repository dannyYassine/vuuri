# Basic Usage

## Minimal Config
You can quickly start using `vuuri` with the minimal configuration below:

```vue
<template>
  <vuuri :items="items" />
</template>

<script>
import vuuri from 'vuuri';

export default {
    components: { 
        vuuri
    },
    data () {
      return {
        items: [...], // your elements to render on screen
      }
    }
}
</script>

<style scoped lang="scss">
</style>
```

## Using className

If you need to add a custom CSS class to the muuri grid, you can pass it via the `class-name` prop:

```vue
<template>
  <vuuri :class-name="my-custom-css-class-name" />
</template>

<script>
  // [...]
</script>

<style>
  .my-custom-css-class-name {
    /* your special styles */
  }
</style>
```

A good use case to use this would be when you have multiple `vuuri` grids on the same page and each of them need different styles.

## Using itemKey

You can provide the identifier of each object contained in the array.
If not provided, one will be created for you for each item. This prop is used for the `v-for`'s `:key` directive inside `vuuri`.

```vue
<template>
  <vuuri
    :items="items"
    item-key="id" />
    <template #item="{ item }">
      <div>
        {{ item.name }}
      </div>
    </template>
  </vuuri>
</template>

<script>
import vuuri from 'vuuri';

export default {
    components: {
        vuuri
    },
    data () {
      return {
        items: [
          {
            id: 1,
            name: 'Foo'
          },
          {
            id: 2,
            name: 'Bar'
          },
        ],
      }
    },
}
</script>
```

## Override CSS styles

```scss
<style scoped lang="scss">
  /deep/ {
    .muuri-grid {
      /* any styles to add on the muuri grid */
    }
    .muuri-item {
      /* any styles to add on the item container */
      /* only to override positioning */
      .muuri-item-content {
        /* add any markup you like */      
      }
      &.muuri-item-dragging {}
      &.muuri-item-releasing {}
      &.muuri-item-hidden {}
    }
    .muuri-item-placeholder {
      /* shadow element behind the dragging element */
    }
  }
</style>
```