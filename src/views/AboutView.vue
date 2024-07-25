<script setup lang="ts">
import NavBar from "../components/navbars/Navbar.vue";
import HomePageLayout from "../components/layouts/HomePageLayout.vue";
import Hero from "../components/hero/Hero.vue";
</script>

<template>
  <HomePageLayout class="text-white">
    <template #page-heading>
      <NavBar class="nav" />
    </template>
    <template #page-content>
      <Hero>
        <template #overlay-content>
          <div class="overlay-content">
            <h1 class="card-title">About us</h1>
          </div>
        </template>
      </Hero>

      <section class="container text-black my-5">
        <h2 class="text-center">Our Story</h2>
        <p class="text-center fs-5">
          Welcome to Foodie, your ultimate destination for discovering, sharing,
          and indulging in culinary delights! At Foodie, we believe that food is
          more than just sustenance; it's a universal language that brings
          people together, tells stories, and creates unforgettable experiences.
          Our mission is to inspire food enthusiasts of all levels to explore
          the world of cooking and baking. Whether you're a seasoned chef or
          just starting in the kitchen, Foodie offers a diverse collection of
          recipes, tips, and culinary insights to help you create delicious
          meals and treats. From quick weeknight dinners to gourmet delicacies,
          our curated selection of recipes caters to every taste and occasion.
          We pride ourselves on featuring authentic, easy-to-follow recipes that
          celebrate flavors from around the world. Our passionate team of food
          lovers and professional chefs works tirelessly to test and perfect
          each recipe, ensuring that you get the best results every time. Join
          us on this gastronomic journey and become a part of our vibrant
          community. Share your favorite recipes, experiment with new
          ingredients, and discover the joy of cooking with Foodie. Let's make
          every meal a celebration!
        </p>
      </section>
    </template>
  </HomePageLayout>
</template>

<style scoped>
.nav {
  position: fixed;
  color: white;
}

.overlay-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.card-title {
  position: relative;
}

/*add a pseudo element under the card-title as line*/
.card-title::before {
  content: "";
  position: absolute;
  top: 120%;
  left: 0;
  width: 100%;
  height: 5px;
  background-color: #f47e25;
}
</style>
