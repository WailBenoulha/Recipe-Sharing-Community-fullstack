<template>
  <div class="mb-3">
    <label :for="id" class="form-label fw-bold">{{ label }}</label>
    <component
      :is="elementType"
      v-bind="attrs"
      :class="['form-control', { 'is-invalid': invalid }]"
    >
      <slot></slot>
    </component>
  </div>
</template>

<script>
export default {
  name: 'BaseFormControler',
  props: {
    id: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    elementType: {
      type: String,
      default: 'input' // could be 'input', 'textarea', 'select', etc.
    },
    attrs: {
      type: Object,
      default: () => ({})
    },
    invalid: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped>
  .form-control {
    width: 100%;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    color: #495057;
    background-color: #dfdfdf;
    background-clip: padding-box;
    border: none;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }

.form-control:focus {
   box-shadow: none;
  }

  .form-control.is-invalid {
    border-color: #dc3545;
  }
</style>
