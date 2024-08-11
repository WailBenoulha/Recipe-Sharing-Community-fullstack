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

        //add some explanation about the website and how it works and it provides 
        //the best recipies and how to use the website
        <section class="container-lg py-5 text-black d-flex  justify-content-center align-items-center">
       <div class="container-lg py-5 text-black">
            <h3 class="text-center  mb-4 fw-bold">How to use the website</h3>
            <p class="text-center fs-5 fw-light">
              This website is designed to help you find the best recipies and share your own recipies with others.
              You can search for recipies by typing the name of the recipe in the search bar and clicking the search button.
              You can also share your own recipies by clicking the share button and filling the form with the recipe details.
              You can also view the details of a recipe by clicking on the recipe card.
            </p>
          </div>
          <img src="/svg/logo-no-background.svg" alt="How to use the website" class="img-fluid rounded-5 w-50" />
        </section>

        <section class="container-lg py-5 text-black d-flex flex-row-reverse justify-content-center align-items-center ">
       <div class="container-lg py-5 text-black ">
            <h3 class="text-center mb-4 fw-bold">what we provide for you</h3>
            <p class="text-center fs-5 fw-light">
              We provide you with the best recipies from around the world. You can search for recipies by typing the name of the recipe in the search bar and clicking the search button.
              You can also share your own recipies with others by clicking the share button and filling the form with the recipe details.
              You can also view the details of a recipe by clicking on the recipe card.
            </p>
            
          </div>
          <img src="https://t3.ftcdn.net/jpg/02/52/38/80/360_F_252388016_KjPnB9vglSCuUJAumCDNbmMzGdzPAucK.jpg" alt="what we provide for you" class="img-fluid rounded-5" />
        </section>

        <section class="container-lg py-5 text-black d-flex justify-content-center align-items-center">
        <div class="container-lg py-5 text-black">
            <h3 class="text-center mb-4 fw-bold">Contact Us</h3>
            <p class="text-center fs-5 fw-light">
              If you have any questions or feedback about our website, please feel free to contact us.
              You can reach us by email at
              
            </p>
        </div>
        <img src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?resize=768,574" alt="Contact Us" class="img-fluid rounded-5" />
        </section>

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
