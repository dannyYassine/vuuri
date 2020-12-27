## Yarn / NPM

Installation:

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

## CSS

The package itself does not include any CSS, since it only takes care of displaying your elements.

## Basic Usage

```vue
<vuuri :items="items">
  <template #item="{ item }">
    <YourComponent :item="item" />
  </template>
</vuuri>
```

```js
// adding
this.items.push(newItem);

// removing
this.items.splice(1, 0);
```