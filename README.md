<p align="center">
<img height="400px" style="max-width:100%" src="https://github.com/dannyYassine/vuuri/blob/master/.docs/.vuepress/public/vuuri_logo.png?raw=true" alt="logo.png">
</p>

<p align="center">
    <a href='https://www.npmjs.com/package/vuuri' target="_blank"><img src='https://img.shields.io/npm/v/vuuri.svg' alt='Library Version' /></a>
    <a href='https://travis-ci.com/dannyYassine/vuuri' target="_blank"><img src='https://travis-ci.com/dannyYassine/vuuri.svg?branch=master' alt='Build Status' /></a>
    <a href="https://codecov.io/gh/dannyYassine/vuuri" > 
 <img src="https://codecov.io/gh/dannyYassine/vuuri/graph/badge.svg?token=7VBZAOBU55"/> 
 </a>
</p>

<p align="center">
    <a><img src="https://img.shields.io/bundlephobia/min/vuuri.svg" alt="Minified size"></a>
    <a href="https://npm-stat.com/charts.html?package=vuuri"><img src="https://img.shields.io/npm/dm/vuuri.svg" alt="Downloads"></a>
</p>

<h1 align="center">
The Vue Muuri Integration:
</h1>
<p align="center">
The abstraction over the <a href="https://muuri.dev/" target="_blank">Muuri library</a> for creating dynamic layouts in vue.js
</p>

## Usage

```vue
<vuuri v-model="items">
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
