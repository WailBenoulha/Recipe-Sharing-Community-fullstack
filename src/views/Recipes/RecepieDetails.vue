<template>
  <HomePageLayout>
    <template #page-heading>
      <Navbar />
    </template>
    <template #page-content>
      <HeroSearch>
        <template #overlay-content>
          <div class="overlay-content">
            <!--recipe details-->
            <h1>{{ recipieTitle }}</h1>
            <p>{{ recipieDescription }}</p>
            <!--Save recipe btn-->
            <BaseButton
              class="btn bg-primary fw-bold p-2"
              type="submit"
              id="button-addon2"
              @click="saveToFavorite"
            >
              <i class="bi bi-bookmark"></i>
              Add to favorite
            </BaseButton>
          </div>
        </template>
      </HeroSearch>

      <main class="container-md py-5">
        <!-- Images carousel -->
        <div id="carouselExample" class="carousel slide">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="/public/hero.jpg" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src="/public/hero.jpg" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src="/public/hero.jpg" class="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>

        <!-- Duration-->
        <div class="duration">
          <h2 class="fw-bold">Duration</h2>
          <p>{{ cookingDuration }} mins</p>
        </div>
        <!-- Ingredients bullets-->
        <div class="ingredients">
          <h2 class="fw-bold">Ingredients</h2>
          <ul>
            <li v-for="ingredient in ingredients" :key="ingredient">
              {{ ingredient }}
            </li>
          </ul>
        </div>
        <!-- Instructions bullets-->
        <div class="instructions">
          <h2 class="fw-bold">Instructions</h2>
          <ul>
            <li
              v-for="instruction in instructions"
              :key="instruction"
              class="relative"
            >
              <p class="fw-normal">{{ instruction }}</p>
            </li>
          </ul>
        </div>

        <!-- Ratings -->
        <h4>User Ratings</h4>
        <div class="row ratings align-items-center">
          <div class="col-12 col-md-3 mb-3 avrage-ratings">
            <h5>{{ avrageRating }}</h5>
            <div class="ratings">
              <span
                v-for="star in 5"
                :key="star"
                class="star"
                :class="{ filled: star <= avrageRating }"
                >&#9733;</span
              >
            </div>
            <p>{{ totalReviews }} reviews</p>
          </div>
          <ul class="progress col-12 col-md-3 flex-column h-50 bg-transparent">
            <div
              v-for="(progress, index) in progresses"
              :key="index"
              class="progress my-2"
            >
            <span class="text-primary ">{{ index + 1 }}</span>
              <div
                class="progress-bar bg-secondary position-relative"
                role="progressbar"
                :style="{ width: progress.value + '%' }"
                :aria-valuenow="progress.value"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                {{ progress.value }}%
              </div>
            </div>
          </ul>
        </div>
      </main>
    </template>
  </HomePageLayout>
</template>

<script setup>
import HomePageLayout from "@/components/layouts/HomePageLayout.vue";
import Navbar from "@/components/navbars/Navbar.vue";
import HeroSearch from "@/components/hero/HeroSearch.vue";
import BaseForm from "@/components/forms/BaseForm.vue";
import BaseButton from "@/components/buttons/BaseButton.vue";

import { ref } from "vue";

const recipieTitle = ref("Chicken Salad");
const recipieDescription = ref("A delicious chicken salad recipe");
const cookingDuration = ref(30);
const ingredients = ref([
  "1 cup of chicken",
  "1 cup of lettuce",
  "1 cup of tomatoes",
  "1 cup of cucumbers",
  "1 cup of carrots",
  "1 cup of onions",
  "1 cup of bell peppers",
  "1 cup of salad dressing",
]);
const instructions = ref([
  " Cut the chicken into small pieces",
  " Mix the chicken with the salad dressing",
  " Add the vegetables and mix well",
  " Serve and enjoy!",
]);

const saveToFavorite = () => {
  // Implement save to favorite logic here
  console.log("Recipe saved to favorite");
};

const avrageRating = ref(4);
const totalReviews = ref(100);
const ratings = ref([20, 30, 10, 15, 25]);
const percent = ref(50);
const progresses = ref([
  { value: 20 },
  { value: 30 },
  { value: 10 },
  { value: 15 },
  { value: 25 },
]);
</script>

<style scoped>
.overlay-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.instructions li {
  margin-bottom: 2rem;
  position: relative;
  font-size: 1.5rem;
}

.instructions li p {
     font-size: 1rem;
}

.instructions li:not(:last-child)::after {
  content: "";
  position: absolute;
  left: -18px;
  bottom: -43px;
  display: inline-block;
  width: 2px;
  height: 3rem;
  background-color: #ccc;
  margin-right: 5px;
}
</style>
