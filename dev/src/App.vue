<template>
  <div id="app">
    <div>
      <img
          alt="Vue logo"
          src="https://github.com/dannyYassine/vuuri/blob/master/.docs/.vuepress/public/vuuri_logo.png?raw=true"
      />
    </div>
    <AddDeleteDemo />
  </div>
</template>

<script>
import AddDeleteDemo from './components/AddDeleteDemo';

export default {
  name: "App",
  components: {
    AddDeleteDemo
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
