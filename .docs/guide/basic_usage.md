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

## Required Slot

You will need to implement the required slot `#item`, in order to display your content as there is no fallback if the slot is not implemented.

```vue
<vuuri :items="items">
  <template #item="{ item }">
    /* your custom markup here */
    <YourCustomComponent :model="item" />
  </template>
</vuuri>
```

## Enable Dragging

Simply add the `drag-enabled` attriute to the `vuuri` component.

```vue
<vuuri :items="items" drag-enabled>
</vuuri>
```

<ClientOnly>
<ImageList cancel-image="false" />
</ClientOnly>

## Automatic Adds and Deletes

You simply need to worry about writing javascript when adding or removing elements in the grid.
`vuuri` figures out what you did in the `items` array to do the right update.

```javascript
// adding
this.items.push(new Item());

// removing
const index = this.items.findIndex((value) => value.id === item.id);
this.items.splice(index, 1);
```

<ClientOnly>
  <AddDeleteDemo min="100" max="100" starting-items="5" adds="1" deletes="1" />
</ClientOnly>

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