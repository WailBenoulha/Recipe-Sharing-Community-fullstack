<template>
  <form @submit.prevent="handleSubmit">
    <slot></slot>
  </form>
</template>

<script>
export default {
  name: 'BaseForm',
  methods: {
    handleSubmit() {
      this.$emit('submit');
    }
  }
};
</script>
