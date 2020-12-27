---
sidebar:
- /
- /page-a
---

# Basic Usage

```vue
<vuuri :items="items">
  <template #item="{ item }">
    <YourComponent :item="item" />
  </template>
</vuuri>
```