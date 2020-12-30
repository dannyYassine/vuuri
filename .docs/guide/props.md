# Props

| Name        | Type           | Default  | Description |
| ------------- |:-------------| :-----| :-----|
| items | Array      | Required | Collection of objects to render |
| options     | Object      |   `{}` | To set up options on the grid: https://github.com/haltu/muuri#grid-options |
| className      | String | `'class${uuid()}'` | Optional class name to add to the grid. If not, one will be provided |
| itemKey | String | `'_$muuri_id'` | Identifier property for each item |
| getItemWidth | Function | `100px` | Callback to fetch a dynamic width based on the item |
| getItemHeight | Function | `100px` | Callback to fetch a dynamic height based on the item |