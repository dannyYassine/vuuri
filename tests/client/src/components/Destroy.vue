<template>
  <div>
    <vuuri v-if="!isDestroyed" v-model="items">
      <template #item="{ item }">
        <div class="item-content">
          {{item.id}}
        </div>
      </template>
    </vuuri>

    <b-button data-e2e="destroy-button" @click="onDestroyClicked">Destroy</b-button>
  </div>
</template>

<script>
import vuuri from '../vuuri';

export default {
  name: "Destroy",
  components: {
    vuuri
  },
  data() {
    return {
      items: [
        {
          id: 1
        }
      ],
      isDestroyed: false
    }
  },
  methods: {
    onDestroyClicked() {
      this.isDestroyed = !this.isDestroyed;
    }
  }
}
</script>

<style scoped>

</style>