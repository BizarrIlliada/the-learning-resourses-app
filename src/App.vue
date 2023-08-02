<template>
  <TheHeader />
  <ul>
    <LearningResource
      v-for="resource in storedResources"
      :key="resource.id"
      :link="resource.link"
      :title="resource.title"
      :description="resource.description"
    />
  </ul>
</template>

<script>
  import TheHeader from './components/layout/TheHeader.vue';
  import LearningResource from './components/learning-resources/LearningResource.vue'

  export default {
    name: 'App',
    components: {
      TheHeader,
      LearningResource,
    },

    data() {
      return {
        storedResources: [
          {
            id: '1',
            title: 'Official Guide',
            description: 'The official Vue.js documentation.',
            link: 'https://vuejs.org',
          },
          {
            id: '2',
            title: 'Google',
            description: 'Learn to Google',
            link: 'https://google.org',
          },
        ],
      }
    },
  }
</script>

<style>
</style>
