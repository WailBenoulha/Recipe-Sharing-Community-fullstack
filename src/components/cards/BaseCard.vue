<template>
  <div class="card rounded-4" style="width: 18rem;" >
    <img src="https://cdn.quasar.dev/img/chicken-salad.jpg"  class="card-img-top rounded-top-4" alt="...">
    <div class="card-body h-50">
      <h5 class="card-title fw-bolder">{{ recipeTitle }}</h5>
      <p class="card-text text-truncate text-secondary">{{ recipeDescription }}</p>
      
      <!-- Ratings -->
      <div class="ratings justify-content-end">
        <span v-for="star in 5" :key="star" class="star" :class="{ filled: star <= recipeRating }">&#9733;</span>
      </div>
       <i class="bg-red" @click="saveToFavorite" :class="mdiBookmarkOutline"></i>
      
      <!-- Cooking Duration -->
      <div class="ms-auto">
        <p class="cooking-duration text-secondary d-inline ms-auto">{{ cookingDuration }} mins</p> .
        <!-- Save to Favorite Button -->
         <svg class="save-icon" @click="saveToFavorite" :path="mdiBookmarkOutline">000000</svg>
        
        <small class=" text-secondary ms-auto">{{ ownerName }}</small>
      </div>
    </div>
  </div>
</template>

<script setup>
import { mdiBookmarkOutline } from '@mdi/js';

 const props = defineProps({
    recipeImg: String,
    recipeTitle: String,
    recipeDescription: String,
    ownerName: String,
    recipeRating: Number,
    cookingDuration: Number
  });
 
  const saveToFavorite = () => {

      // Implement save to favorite logic here
      console.log('Recipe saved to favorite');
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



.save-icon {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 50rem;
  cursor: pointer;
  color: #007bff;
  z-index: 99;
}
</style>