
export const install = `
  $ yarn add vuuri
`;

export const usageCode = `
<vuuri v-model="items">
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