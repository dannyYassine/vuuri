# Vuuri Events

| Name        | Attributes           | Listen to  | Description |
| ------------- |:-------------| :-----| :-----|
| updated | `none`      | `@updated` | Emitted after updating the layout of the grid |

# Muuri Events

#### All events from Muuri are accessible and emitted from the component:

*Event name in camelCase are translated to kebab-case*

```javascript
<vuuri
  synchronize="onSynchronize"
  layout-start="onLayoutStart"
  layout-end="onLayoutEnd"
  layout-abort="onLayoutAbort"
  add="onAdd"
  remove="onRemove"
  show-start="onShowStart"
  show-end="onShowEnd"
  hide-start="onHideStart"
  hide-end="onHideEnd"
  filter="onFilter"
  sort="onSort"
  move="onMove"
  send="onSend"
  before-send="onBeforeSend"
  receive="onReceive"
  before-receive="onBeforeReceive"
  drag-init="onDragInit"
  drag-start="onDragStart"
  drag-move="onDragMove"
  drag-scroll="onDragScroll"
  drag-end="onDragEnd"
  drag-release-start="onDragReleaseStart"
  drag-release-end="onDragReleaseEnd"
  destroy="onDestroy">
</vuuri>
```