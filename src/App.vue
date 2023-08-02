<template>
  <TheHeader />
  <StoredResources />
</template>

<script>
  import TheHeader from './components/layout/TheHeader.vue';
  import StoredResources from './components/learning-resources/StoredResources.vue';

  export default {
    name: 'App',
    components: {
      TheHeader,
      StoredResources,
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
