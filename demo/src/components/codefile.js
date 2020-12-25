
export const usageCode = `
<vuuri :items="items">
  <template #item="{ item }">
    <YourComponent :item="item" />
  </template>
</vuuri>
`;

export const crudCode = `
// adding
this.items.push(newItem);

// removing
this.items.splice(1, 0);
`;