<template>
  <div class="">
    <section class="page-heading container">
      <slot name="page-heading"></slot>
    </section>

    <section class="page-content">
      <slot name="page-content"></slot>
    </section>

    <section class="page-footer">
      <h1 class="text-center">Tiabi</h1>
      <slot name="page-footer"></slot>
    </section>
  </div>
</template>

<style scoped>
.page-content {
  background-color: #f8f9fa;
  min-height: 100vh;
  z-index: 0;
  position: relative;
}

.page-footer {
  background-color: #343a40;
  color: #ffffff;
  padding: 20px;
  text-align: center;
}
</style>