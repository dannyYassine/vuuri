<template>
  <section>
    <Header />
    <AddDeleteDemo />
    <KanBanDemo />
  </section>
</template>

<script>
import Header from './components/Header.vue';
import KanBanDemo from './components/KanBanDemo.vue';
import AddDeleteDemo from './components/AddDeleteDemo.vue';

export default {
  name: "App",
  components: {
    AddDeleteDemo,
    KanBanDemo,
    Header
  }
};

</script>

<style scoped lang="scss">
section {
  text-align: center;
}
</style>
