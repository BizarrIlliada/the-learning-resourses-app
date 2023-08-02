<template>
  <BaseCard>
    <nav>
      <BaseButton @click="setActiveTab($.components.StoredResources.name)">
        Stored Resources
      </BaseButton>
      <BaseButton @click="setActiveTab($.components.AddResource.name)">
        Add resource
      </BaseButton>
    </nav>
  </BaseCard>
  <component :is="activeTab" :resources="storedResources"></component>
</template>

<script>
  import StoredResources from './StoredResources.vue';
  import AddResource from './AddResource.vue';

  export default {
    name: 'TheResources',
    components: {
      StoredResources,
      AddResource,
    },

    data() {
      return {
        activeTab: 'StoredResources',
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

    methods: {
      setActiveTab(tab) {
        this.activeTab = tab;
        console.log(tab);
      },
    },

    mounted() {
      console.log(this);
    }
  }
</script>

<style scoped>
  nav {
    display: flex;
    justify-content: space-around;
  }
</style>
