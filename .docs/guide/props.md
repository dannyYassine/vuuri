# Props

| Name        | Type           | Default  | Description |
| ------------- |:-------------| :-----| :-----|
| value | Array      | Required | Collection of objects to render |
| itemKey | String | `'_$muuri_id'` | Identifier property for each item |
| className      | String | `'class${uuid()}'` | Optional class name to add to the grid. If not, one will be provided |
| getItemWidth | Function | `100px` | Callback to fetch a dynamic width based on the item |
| getItemHeight | Function | `100px` | Callback to fetch a dynamic height based on the item |
| dragEnabled | Boolean | `false` | Flag to enable dragging in the grid |
| dragHandle | String | `'.muuri-item:first-child'` | Selector on the item to activate dragging |
| groupId | String, Number | `undefined` | Group Id to associate a group of vuuri grids |
| groupIds | String, Number | `undefined` | Group Ids to associate a group of vuuri grids |
| options     | Object      |   `{}` | To set up options on the grid: https://github.com/haltu/muuri#grid-options |
