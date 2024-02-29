<template>
  <div class="demo-item" :style="{ backgroundColor: item.color }">
    <div class="grid-card-handle" :style="{ color: item.textColor }">
      {{ item.name }}
    </div>
    <div class="grid-card-remove" @click="onDeleteClicked">
      <svg class="board-item-action-icon icon-delete" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <path fill="currentColor" d="M439.15 453.06L297.17 384l141.99-69.06c7.9-3.95 11.11-13.56 7.15-21.46L432 264.85c-3.95-7.9-13.56-11.11-21.47-7.16L224 348.41 37.47 257.69c-7.9-3.95-17.51-.75-21.47 7.16L1.69 293.48c-3.95 7.9-.75 17.51 7.15 21.46L150.83 384 8.85 453.06c-7.9 3.95-11.11 13.56-7.15 21.47l14.31 28.63c3.95 7.9 13.56 11.11 21.47 7.15L224 419.59l186.53 90.72c7.9 3.95 17.51.75 21.47-7.15l14.31-28.63c3.95-7.91.74-17.52-7.16-21.47zM150 237.28l-5.48 25.87c-2.67 12.62 5.42 24.85 16.45 24.85h126.08c11.03 0 19.12-12.23 16.45-24.85l-5.5-25.87c41.78-22.41 70-62.75 70-109.28C368 57.31 303.53 0 224 0S80 57.31 80 128c0 46.53 28.22 86.87 70 109.28zM280 112c17.65 0 32 14.35 32 32s-14.35 32-32 32-32-14.35-32-32 14.35-32 32-32zm-112 0c17.65 0 32 14.35 32 32s-14.35 32-32 32-32-14.35-32-32 14.35-32 32-32z"></path>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: "GridDemoItem",
  props: {
    item: {
      required: true
    }
  },
  methods: {
    onDeleteClicked() {
      this.$emit('on-delete', this.item);
    }
  }
}
</script>

<style scoped lang="scss">
.demo-item {
  position: relative;
  height: 100%;
  width: 100%;
  border-radius: 15px;
  cursor: move;

  .grid-card-handle {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bolder;
  }

  .grid-card-remove {
    background-color: #ff6262;
    color: #ffe67a;
    cursor: pointer;
    position: absolute;
    top: -12px;
    right: -12px;
    border-radius: 10px;
    height: 30px !important;
    width: 30px !important;
    padding: 7px;
    transition: opacity 0.3s ease, transform 0.3s ease;
    opacity: 0;
    transform: scale(0.5);

    svg {
      position: relative;
      top: -1px;
    }
  }

  &:hover {
    .grid-card-remove {
      opacity: 1;
      transform: scale(1);
    }
  }
}
</style>