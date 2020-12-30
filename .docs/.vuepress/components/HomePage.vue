<template>
  <div id="home-page">
    <Header />
    <CodeDemo />
    <ClientOnly>
      <GridDemo />
    </ClientOnly>
    <Credits />
  </div>
</template>

<script>
export default {
  name: 'HomePage',
}
</script>

<style scoped>

</style>