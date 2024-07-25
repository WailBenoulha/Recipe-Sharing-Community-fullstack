<script setup lang="ts">
import NavBar from '../components/navbars/Navbar.vue'
import HomePageLayout from '../components/layouts/HomePageLayout.vue'
import Hero from '../components/hero/Hero.vue'
</script>

<template>
  <HomePageLayout class="text-white">
    <template #page-heading>
      <NavBar class="nav" />
    </template>
    <template #page-content>
  
        <Hero />

    </template>
    </HomePageLayout>
</template>

<style scoped>

.nav{
  position: fixed;
  color: white;
}

</style>
