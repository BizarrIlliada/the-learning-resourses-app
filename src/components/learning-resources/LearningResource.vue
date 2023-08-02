<template>
  <li>
    <div>
      <header>
        <h3>{{ title }}</h3>
        <button>
          Delete
        </button>
      </header>
    </div>
    <p>{{ description }}</p>
    <nav>
      <a :href="link">
        View resource
      </a>
    </nav>
  </li>
</template>

<script>
  export default {
    name: 'LearningResource',
    props: {
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
  }
</script>
