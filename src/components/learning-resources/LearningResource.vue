<template>
  <li>
    <BaseCard>
      <header>
        <h3>{{ title }}</h3>
        <BaseButton mode="flat" @click="deleteResource(id)">
          Delete
        </BaseButton>
      </header>
      <p>{{ description }}</p>
      <nav>
        <a :href="link" target="_blank">
          View resource
        </a>
      </nav>
    </BaseCard>
    </li>
</template>

<script>
  export default {
    name: 'LearningResource',
    props: {
      id: {
        type: Number,
        required: true,
      },
      link: {
        type: String,
        require: true,
      },
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
    },
    inject: {
      deleteResource: {
        type: Function,
        required: true,
      }
    },
  }
</script>

<style scoped>
  li {
    margin: auto;
    max-width: 40rem;
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h3 {
    font-size: 1.25rem;
    margin: 0.5rem 0;
  }

  p {
    margin: 0.5rem 0;
  }

  a {
    text-decoration: none;
    color: #ce5c00;
  }

  a:hover,
  a:active {
    color: #c89300;
  }
</style>
