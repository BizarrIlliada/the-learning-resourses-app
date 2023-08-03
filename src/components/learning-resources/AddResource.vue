<template>
  <BaseCard>
    <form @submit.prevent="submitData">
      <div class="form-control">
        <label for="addResourceFormTitleInput">Title:</label>
        <input
          type="text"
          name="title"
          id="addResourceFormTitleInput"
          ref="titleInput"
        >
      </div>
      <div class="form-control">
        <label for="addResourceFormDescriptionInput">Description:</label>
        <textarea
          name="description"
          id="addResourceFormDescriptionInput"
          rows="3"
          ref="descriptionInput"
        ></textarea>
      </div>
      <div class="form-control">
        <label for="addResourceFormLinkInput">Link:</label>
        <input
          type="text"
          name="link"
          id="addResourceFormLinkInput"
          ref="linkInput"
        >
      </div>
      <div>
        <BaseButton type="submit">
          Add resource
        </BaseButton>
      </div>
    </form>
  </BaseCard>
</template>

<script>
  export default {
    name: 'AddResource',
    inject: {
      addResource: {
        type: Function,
        required: true,
      }
    },

    data() {
      return {}
    },

    methods: {
      submitData() {
        const enteredTitle = this.$refs.titleInput.value;
        const enteredDescription = this.$refs.descriptionInput.value;
        const enteredLink = this.$refs.linkInput.value;

        this.addResource(enteredTitle, enteredDescription, enteredLink)

        this.$refs.titleInput.value = '';
        this.$refs.descriptionInput.value = '';
        this.$refs.linkInput.value = '';
      },
    },
  }
</script>

<style scoped>
  label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
  }

  input,
  textarea {
    display: block;
    width: 100%;
    font: inherit;
    padding: 0.15rem;
    border: 1px solid #ccc;
    resize: vertical;
  }

  input:focus,
  textarea:focus {
    outline: none;
    border-color: #3a0061;
    background-color: #f7ebff;
  }

  .form-control {
    margin: 1rem 0;
  }
</style>
