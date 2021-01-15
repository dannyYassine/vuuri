<p align="center">
<img height="400px" style="max-width:100%" src="https://github.com/dannyYassine/vuuri/blob/master/.docs/.vuepress/public/vuuri_logo.png?raw=true" alt="logo.png">
</p>

<p align="center">
The Vue Muuri Integration:
</p>
<p align="center">
The abstraction over the <a href="https://muuri.dev/" target="_blank">Muuri library</a> for creating dynamic layout in vue.js
</p>

## Usage

```vue
<vuuri :items="items">
  <template #item="{ item }">
    <YourComponent :item="item"/>
  </template>
</vuuri>
```

## Automatic CRUD Updates

You just worry about writing javascript

```javascript
// adding
this.items.push(newItem);

// removing
this.items.splice(1, 0);
```

Vuuri takes care of the rest. Vuuri figures out what you did 
in the items array to do the right update.

## Documentation

* [Go to website](https://dannyyassine.github.io/vuuri)

* [Go to docs](https://dannyyassine.github.io/vuuri/guide/install.html)

## Credits

Vuuri is a simple wrapper for Vue.js and full credits go to 
the author of the Muuri library: [Niklas Rämö](https://github.com/niklasramo)
Assets from this page were inspired and taken from the 
original [Muuri website](https://muuri.dev/).