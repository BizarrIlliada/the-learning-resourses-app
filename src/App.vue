<template>
  <TheHeader />
  <TheResources />
</template>

<script>
  import TheHeader from './components/layouts/TheHeader.vue';
  import TheResources from './components/learning-resources/TheResources.vue';

  export default {
    name: 'App',
    components: {
      TheHeader,
      TheResources,
    },
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@200;400;700&display=swap');

  * {
    box-sizing: border-box;
  }

  html {
    font-family: 'Roboto Mono', monospace;
  }

  body {
    margin: 0;
  }
</style>
