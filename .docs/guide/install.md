# Installation

## via Yarn / NPM

```bash
yarn add vuuri

# or with NPM
npm install vuuri
```

Then, import and register the component:

```js
import Vue from 'vue'
import vuuri from 'vurri'

Vue.component('vuuri', vuuri);
```

## via CDN
```html
<script src="https://unpkg.com/vuuri@1.0.0"></script>
```

```js
// register globally
Vue.component('vuuri', window.vuuri.default)
```

## CSS

The package itself does not include any CSS, since it only takes care of displaying your elements.

## Usage

```vue
<template>
  <vuuri :items="items">
    <template #item="{ item }">
      <YourComponent :item="item" />
    </template>
  </vuuri>
</template>

<script>
import vuuri from 'vuuri';
import YourComponent from '/@/components/YourComponent';

// register globally
Vue.component('vuuri', vuuri)

export default {
    // OR register locally
    components: { 
        vuuri,
        YourComponent
    },
    data () {
      return {
        items: [...], // your elements to render on screen
      }
    }
}
</script>

<style scoped lang="scss">
  // your styles
</style>
```