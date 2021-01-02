# Groups

## Using group-id
You can associate different `vuuri` grids together by assigning them to a `group-id`. By doing so, you can freely drag and drop their grid elements to each other.

Simply assign the grids with the same `group-id`:

```vue
<template>
  <div>
    <vuuri>
      :items="todoItems"
      group-id="kanbanboard"
      drag-enabled
    </vuuri>
    <vuuri>
      :items="doneItems"
      group-id="kanbanboard"
      drag-enabled
    </vuuri>    
  </div>
</template>
```

<ClientOnly>
<SimpleGroup />
</ClientOnly>

## Using group-ids

You can also make use of `group-ids`. Same principle, but you can associate a `vuuri` grid to a group of grids to share grid elements.

```vue
<template>
  <div>
    <vuuri>
      :items="todoItems"
      :group-ids="['grid_a', 'grid_c']"
      drag-enabled
    </vuuri>
    <vuuri>
      :items="doneItems"
      :group-ids="['grid_b', 'grid_d']"
      drag-enabled
    </vuuri>
    <vuuri>
      :items="doneItems"
      :group-ids="['grid_c', 'grid_d']"
      drag-enabled
    </vuuri>        
  </div>
</template>
```

In the above example, `grid_a` and `grid_b` are able to freely drag
their items to `grid_c`, but `grid_a` can't drag it items to `grid_b` and vice versa.
This was achieved by adding a fourth group (`grid_d`) because this is needed if you want to exclude other groups.

<br>

Schema:


`grid_a` -> `grid_c`

`grid_b` -> `grid_c`

<br>

<ClientOnly>
<GroupsExample />
</ClientOnly>

<br>

Go check out the [KanBan Demo](/guide/kanban.html#example) example.