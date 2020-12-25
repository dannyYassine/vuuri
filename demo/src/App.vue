<template>
  <div id="app">
    <Header />
    <CodeDemo />
    <GridDemo />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header";
import GridDemo from "@/components/GridDemo";
import CodeDemo from "@/components/CodeDemo";
import Footer from "@/components/Footer";

export default {
  name: 'App',
  components: {
    Footer,
    CodeDemo,
    GridDemo,
    Header,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
