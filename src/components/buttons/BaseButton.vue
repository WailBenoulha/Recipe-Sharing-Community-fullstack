<template>
  <button
    :type="type"
    class="btn btn-primary"
    :class="btnClass"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    type: {
      type: String,
      default: 'button'
    },
    btnClass: {
      type: String,
      default: ''
    }
  }
};
</script>
