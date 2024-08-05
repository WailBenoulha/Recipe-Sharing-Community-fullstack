<template>
  <div class="card rounded-4" style="width: 18rem;" >
     <i  :class="['bi save-icon', { 'bi-heart-fill': saved , 'bi-heart': !saved }]" @click="saveToFavorite"></i>
    <img src="https://cdn.quasar.dev/img/chicken-salad.jpg"  class="card-img-top rounded-top-4" alt="...">
    <router-link class="card-body h-50" :to="to">

      <h5 class="card-title fw-bolder">{{ recipeTitle }}</h5>
      <p class="card-text text-truncate text-secondary">{{ recipeDescription }}</p>
      
      <!-- Ratings -->
      <div class="ratings">
        <span v-for="star in 5" :key="star" class="star" :class="{ filled: star <= recipeRating }">&#9733;</span>
      </div>
      
      <!-- Cooking Duration -->
      <div class="ms-auto ">
        <p class="cooking-duration text-secondary d-inline ms-auto">{{ cookingDuration }} mins</p> .
        <!-- Save to Favorite Button -->
        <!-- check if the recipe is saved to favorite -->
       
        <small class=" text-secondary ms-auto">{{ ownerName }}</small>
      </div>
    </router-link >
  </div>
</template>

<script setup>
  import { ref } from 'vue';
 const props = defineProps({
    recipeImg: String,
    recipeTitle: String,
    recipeDescription: String,
    ownerName: String,
    recipeRating: Number,
    cookingDuration: Number,
    to: Object,
  });

  const saved = ref(false);
 
  const saveToFavorite = () => {
    saved.value = !saved.value;
      // Implement save to favorite logic here
      console.log('Recipe saved to favorite' , saved.value);
    }
  

</script>

<style scoped>
.card {
  margin-bottom: 20px;
  border:  none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  height: 20rem;
}

.card-img-top {
  height: 50%;
  object-fit: cover;
}


.ratings {
  display: flex;
  gap: 5px;
}

p, small {
  /* margin: 0; */
}

.star {
  font-size: 1.2em;
  color: #ccc;
}

.star.filled {
  color: #f39c12;
}

.card{
  position: relative;
}

.save-icon {
 position: absolute;
  right: 5px;
  top: 5px;
  font-size: 1.5rem;
  cursor: pointer;
  color: #f39c12;
  font-weight: bolder;
}

a:hover{
 background-color: transparent;
}
</style>