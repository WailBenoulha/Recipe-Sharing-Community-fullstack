<template>
  <HomePageLayout>
    <template #page-heading>
      <Navbar />
    </template>
    <template #page-content>
      <HeroSearch>
        <template #overlay-content>
          <div class="overlay-content">
            <h1>Recipe Search</h1>
            <p>Search for your favorite recipes</p>
            <BaseForm class="d-flex w-50 gap-3 flex-wrap flex-md-nowrap">
              <BaseFormControler
                elementType="input"
                class="form-control"
                placeholder="Search for recipies"
                aria-label="Search for recipies"
                aria-describedby="button-addon2"
              />
              <BaseButton
                class="btn bg-primary fw-bold p-2"
                type="submit"
                id="button-addon2"
                @click="searchRecipes"
              >
                Search
              </BaseButton>
            </BaseForm>
          </div>
        </template>
      </HeroSearch>

      <main class="container-md py-5">
        <!-- Page Title -->
        <h1 class="fw-bold">Recipe Search</h1>

        <!-- Filters -->
      <div class="filters">
      <label for="filters">Filters:</label>
      <select id="filters" v-model="selectedFilters" >
        <option value="vegetarian">Vegetarian</option>
        <option value="vegan">Vegan</option>
        <option value="glutenFree">Gluten-Free</option>
      </select>
    </div>
    <i  class="bi bi-bookmark save-icon"></i>
        <!-- Search Results -->
        <div class="results">
          <div v-if="recipes.length === 0">No results found</div>
          <div class="recipes-container" v-else>
            <div class="row container-sm">
              <div class="col col-md-6 col-lg-4 col-xxl-3" v-for="recipe in recipes" :key="recipe.id  ">
            <router-link :to="{ name: 'recipe', params: { id: recipe.id } }">
                  <BaseCard
                  class="card"
                    :recipeTitle="recipe.title"
                    :recipeDescription="recipe.description"
                    :ownerName="recipe.owner"
                    :stars="recipe.rating"
                    :recipeRating="recipe.rating"
                    :cookingDuration= "recipe.duration"
                    
                  />
            </router-link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </template>
  </HomePageLayout>
</template>

<script setup>
import BaseCard from "@/components/cards/BaseCard.vue"; // Import your recipe card component
import HomePageLayout from "@/components/layouts/HomePageLayout.vue";
import BaseFormControler from "@/components/forms/BaseFormControler.vue";
import Navbar from "@/components/navbars/Navbar.vue";
import HeroSearch from "@/components/hero/HeroSearch.vue";

import { ref, watch } from "vue";
import BaseForm from "@/components/forms/BaseForm.vue";
import BaseButton from "@/components/buttons/BaseButton.vue";

const filters = ref({
  vegetarian: false,
  vegan: false,
  glutenFree: false,
});

const searchQuery = ref("");

const recipes = [
  {
    id: 1,
    title: "Chicken Salad",
    description: "A delicious chicken salad recipe",
    owner: "John Doe",
    rating: 4,
    img: "https://cdn.quasar.dev/img/chicken-salad.jpg",
    duration: 30,
  },
  {
    id: 2,
    title: "Vegetable Stir Fry",
    description: "A delicious vegetable stir fry recipe",
    owner: "Jane Doe",
    rating: 5,
    img: "https://cdn.quasar.dev/img/vegetable-stir-fry.jpg",
    duration: 30,

  },
  {
    id: 3,
    title: "Vegan Pizza",
    description: "A delicious vegan pizza recipe",
    owner: "John Smith",
    rating: 3,
    img: "https://cdn.quasar.dev/img/vegan-pizza.jpg",
    duration: 30,

  },
  {
    id: 4,
    title: "Gluten-Free Pancakes",
    description: "A delicious gluten-free pancake recipe",
    owner: "Jane Smith",
    rating: 4,
    img: "https://cdn.quasar.dev/img/gluten-free-pancakes.jpg",
    duration: 30,

  },
  {
    id: 5,
    title: "Vegan Tacos",
    description: "A delicious vegan taco recipe",
    owner: "John Doe",
    rating: 5,
    img: "https://cdn.quasar.dev/img/vegan-tacos.jpg",
    duration: 30,

  },
];

const searchRecipes = () => {
  // Your search logic here
};

const results = ref([]);

watch([searchQuery, filters], () => {
  // Filter and update results based on searchQuery and filters
  results.value = recipes.filter((recipe) => {
    const matchesSearchQuery = recipe.name
      .toLowerCase()
      .includes(searchQuery.value.toLowerCase());
    const matchesFilters = Object.keys(filters.value).every(
      (filter) => !filters.value[filter] || recipe[filter]
    );

    return matchesSearchQuery && matchesFilters;
  });
});
</script>

<style scoped>
/* Your custom styles */

a:hover{
 background-color: transparent;
}

.recipes-cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
}

.overlay-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}


.save-icon {
  font-size: 50rem;
  width: 100px;
  height: 100px;
  color: #000;
}

</style>
