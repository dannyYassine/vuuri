# Using Options

If the vurri props are not enough to satisfy your use case, you can always fallback using the Muuri options to have full control and full flexibility and pass it to the vuuri component.
`vuuri` accepts an options object through its props in order to configure the underlying Muuri grid.

```vue
<template>
  <vuuri
    :options="options" />
</template>
```

## Options will override prop values
Passing an options object will override any `vuuri` props that accomplishes the same objective.

<br>

For example, adding a `drag-enabled` on the `vuuri` component:

```vue
<template>
  <vuuri
    drag-enabled />
</template>
```

and setting `dragEnabled` to false in the options:

```javascript
{
  dragEnabled: false
}
```

The merge strategy makes the options have a higher priority and will override the values passed in the component props, resulting to `dragEnabled: false` passed to `Muuri`.    

<br>

This object is the same signature as the [Muuri options](https://github.com/haltu/muuri#grid-options). Go check out the example [simple drag and drop example](/guide/simple_drag_drop.html#example)

## Helping Out
You can always add the required to add this use case and create a pull request on GitHub :) 