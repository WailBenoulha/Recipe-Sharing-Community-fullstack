<script setup >;

</script>

<template>
  <div class="">
 
    <section class="page-heading container ">
      <slot name="page-heading"></slot>
      
    </section>

    <section class="position-relative page-content ">
      <slot
        name="page-content"
      ></slot>
    </section>
  </div>
</template>

<style scoped>

.page-heading{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
}

.page-content{
  background-color: #f8f9fa;
  min-height: 100vh;
  z-index: 0;
  position: relative;
}



</style>
