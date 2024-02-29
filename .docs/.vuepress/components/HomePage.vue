<template>
  <div id="home-page">
    <Header />
    <ClientOnly>
      <CodeDemo />
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