<template>
  <div>
    <b-field label="Min Size">
      <b-input v-model="min"/>
    </b-field>
    <b-field label="Max Size">
      <b-input v-model="max"/>
    </b-field>
    <AddDeleteDemo :min="min" :max="max" :starting-items="5" />
  </div>
</template>

<script>
export default {
  name: 'DynamicHeightDemo',
  data() {
    return {
      min: 75,
      max: 150
    }
  }
}
</script>

<style scoped lang="scss">
  div::v-deep {
    .add-delete-buttons,
    .vuuri-container {
      top: 0 !important;
    }
  }
</style>