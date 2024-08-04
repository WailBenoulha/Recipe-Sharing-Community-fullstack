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
  
        <Hero >

          <template #overlay-content>
             <div class="overlay-content">
          <h1 class="card-title  "> Welcome to <span class="fw-bolder text-primary">Tiabi</span></h1>
          <p class="card-text fs-5 fw-light">Where you find the best recipies</p>
          <form class="d-flex w-50  gap-3 flex-wrap flex-md-nowrap">
            <input
              type="text"
              class="form-control"
              placeholder="Search for recipies"
              aria-label="Search for recipies"
              aria-describedby="button-addon2"
            />
            <button
              class="btn bg-primary fw-bold p-2"
              type="submit"
              id="button-addon2"
            >
              Search
            </button>
          </form>
     </div>
          </template>

        </Hero>

    </template>
    </HomePageLayout>
</template>

<style scoped>

.nav{
  position: fixed;
  color: white;
}


.overlay-content{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
}

</style>
