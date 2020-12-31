# Using Options

`vuuri` accepts an options object through its props in order to configure the underlying Muuri grid.

```vue
<template>
  <vuuri
    :items="items"
    :options="options" />
</template>
```

This object is the same signature as the [Muuri options](https://github.com/haltu/muuri#grid-options).

Go check out the example [simple drag and drop example](/guide/simple_drag_drop.html#example)