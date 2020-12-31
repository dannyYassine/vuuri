# Custom Slots

You will need to implement the required slot `#item`, in order to display your content.

```vue
<vuuri :items="items">
  <template #item="{ item }">
    /* your custom markup here */
    <YourCustomComponent />
  </template>
</vuuri>
```