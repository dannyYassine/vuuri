<template>
  <div id="home-page">
    <Header />
    <CodeDemo />
    <ClientOnly>
      <GridDemo />
    </ClientOnly>
    <Credits />
    <ClientOnly>
      <GoogleAnalytics />
    </ClientOnly>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
}
</script>

<style scoped>

</style>