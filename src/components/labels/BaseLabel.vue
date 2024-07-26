<template>
  <label :for="for" class="form-label">
    <slot></slot>
  </label>
</template>

<script>
export default {
  name: 'BaseLabel',
  props: {
    for: {
      type: String,
      required: true
    }
  }
};
</script>
