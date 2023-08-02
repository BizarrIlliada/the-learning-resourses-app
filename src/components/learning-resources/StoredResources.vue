<template>
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
  import LearningResource from './LearningResource.vue';

  export default {
    name: 'StoredResources',
    components: {
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

<style scoped>
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    margin: auto;
    max-width: 40rem;
  }
</style>