<template>
  <input
    v-if="elementType === 'input'"
    :id="id"
    class="form-control"
    @input="emit('update:modelValue', $event.target.value)"
  />
  <select
    v-else-if="elementType === 'select'"
    :id="id"
    class="form-control"
    @input="emit('update:modelValue', $event.target.value)"
  >
    <slot></slot>
  </select>
  <textarea
    v-else-if="elementType === 'textarea'"
    :id="id"
    class="form-control"
    @input="emit('update:modelValue', $event.target.value)"
  ></textarea>
</template>

<script setup>

import { ref, computed } from "vue";

const emit = defineEmits(['update:modelValue']);

const props = defineProps({
  id: String,
  label: String,
  elementType: String,
  attrs: Object,
  modelValue: String,
});



</script>

<style scoped>
  .form-control {
    width: 100%;
    height: 3rem;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    color: #495057;
    background-color: #dfdfdf;
    background-clip: padding-box;
    border: none;
    border-radius: 0.3rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }

.form-control:focus {
   box-shadow: none;
  }

  .form-control.is-invalid {
    border-color: #dc3545;
  }
</style>
