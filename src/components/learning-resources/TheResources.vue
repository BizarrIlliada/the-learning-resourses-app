<template>
  <BaseCard>
    <nav>
      <BaseButton
        @click="setActiveTab($.components.StoredResources.name)"
        :mode="storeResButtonMode"
      >
        Stored Resources
      </BaseButton>
      <BaseButton
        @click="setActiveTab($.components.AddResource.name)"
        :mode="addResButtonMode"
      >
        Add resource
      </BaseButton>
    </nav>
  </BaseCard>
  <KeepAlive>
    <component :is="activeTab"></component>
  </KeepAlive>
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
            id: 1,
            title: 'Official Guide',
            description: 'The official Vue.js documentation.',
            link: 'https://vuejs.org',
          },
          {
            id: 2,
            title: 'Google',
            description: 'Learn to Google',
            link: 'https://google.org',
          },
        ],
      }
    },

    provide() {
      return {
        resources: this.storedResources,
        addResource: this.addResource,
        deleteResource: this.deleteResource,
      }
    },

    computed: {
      storeResButtonMode() {
        return this.activeTab === StoredResources.name ? '' : 'flat';
      },
      addResButtonMode() {
        return this.activeTab === AddResource.name ? '' : 'flat';
      },
    },

    methods: {
      setActiveTab(tab) {
        if (tab !== this.activeTab) {
          this.activeTab = tab;
        }
      },
      addResource(title, description, link) {
        this.storedResources.unshift({
          id: new Date().getTime(),
          title,
          description,
          link,
        })

        this.activeTab = StoredResources.name;
      },
      deleteResource(resId) {
        const index = this.storedResources.findIndex(res => res.id === resId);

        this.storedResources.splice(index, 1);
      },
    },
  }
</script>

<style scoped>
  nav {
    display: flex;
    justify-content: space-around;
  }
</style>
