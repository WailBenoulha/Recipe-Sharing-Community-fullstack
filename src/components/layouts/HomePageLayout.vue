<script setup >;

</script>

<template>
  <div class="">
 
    <section class="page-heading container ">
      <slot name="page-heading"></slot>
      
    </section>

    <section class=" page-content ">
      <slot
        name="page-content"
      ></slot>
    </section>

  </div>
  <footer>
    <slot name="footer"></slot>
  </footer>
</template>

<style scoped>


.page-content{
  background-color: #f8f9fa;
  min-height: 100vh;
  z-index: 0;
  position: relative;
}



</style>
