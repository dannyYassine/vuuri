# Dynamic Sizes

<p>Using <code>vuuri</code> becomes more satisfying when the items you want to render each have a different height and/or width to fully leverage dynamic layouts.</p>
<br>
<p>You will need to implement two functions in your component so <code>vurri</code> can ask to retrieve the height and width based on the item being rendered.</p>

```js
methods: {
  getItemWidth(item) {
    return `${item.width}%`
  },
  getItemHeight(item) {
    return `${item.height}px`
  }
}
```

You will need to always return a formatted string with the right unit of size. For example, for percentage `33%` and pixels `100px`. You can obviously return `rem` or `em`;


```vue
<template>
  <vuuri
    v-model="items" &#32;
    :get-item-width="getItemWidth"
    :get-item-height="getItemHeight" />
    <template #item="{ item }>
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
        items: [...], // your elements to render on screen
      }
    },
    methods: {
      getItemWidth(item) {
        return `${item.width}%`
      },
      getItemHeight(item) {
        return `${item.height}px`
      }
    }
}
</script>

<style scoped lang="scss">
</style>
```