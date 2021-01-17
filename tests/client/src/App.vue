<template>
  <div id="app">
    <div>
      <img
          alt="Vue logo"
          src="https://github.com/dannyYassine/vuuri/blob/master/.docs/.vuepress/public/vuuri_logo.png?raw=true"
      />
    </div>
    <KanBanDemo />
  </div>
</template>

<script>
import KanBanDemo from './components/KanBanDemo';

export default {
  name: "App",
  components: {
    KanBanDemo
  }
};

</script>

<style scoped lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  img {
    max-height: 150px;
  }
}
</style>
