<script setup lang="ts">
import { ref } from 'vue';
import NavBar from '@/components/navbars/Navbar.vue';
import HomePageLayout from '@/components/layouts/HomePageLayout.vue';
import Hero from '@/components/hero/Hero.vue';
import BaseButton from '@/components/buttons/BaseButton.vue';
import BaseForm from '@/components/forms/BaseForm.vue';
import BaseFormControler from '@/components/forms/BaseFormControler.vue';
import BaseLabel from '@/components/labels/BaseLabel.vue';

const handleFormSubmit = () => {
  console.log("Form submitted with data:", {
    ingredients: ingredients.value,
    instructions: instructions.value,
  });
};

const ingredients = ref<string[]>(['']);
const instructions = ref<string[]>(['']);

const addIngredient = () => {
  ingredients.value.push('');
};

const addInstruction = () => {
  instructions.value.push('');
};

</script>

<template>
  <HomePageLayout class="text-white">
    <template #page-heading>
      <NavBar />
    </template>
    <template #page-content>
      <Hero>
        <template #overlay-content>
          <div class="overlay-content">
            <h1 class="card-title">Upload New Recipe</h1>
          </div>
        </template>
      </Hero>

      <main class="container-lg py-5 ">
        <h3 class="text-center mb-4">Share your recipe</h3>
        <BaseForm @submit="handleFormSubmit" class="w-50 mx-auto">
          <BaseFormControler
            id="title"
            label="Title"
            elementType="input"
            :attrs="{ type: 'text', placeholder: 'Recipe title' }"
          />
          <BaseLabel>Ingredients</BaseLabel>
          <div v-for="(ingredient, index) in ingredients" :key="index" class="mb-3">
            <BaseFormControler
              :id="'ingredient-' + index"
              elementType="input"
              v-model="ingredients[index]"
              :attrs="{ type: 'text', placeholder: 'Add new ingredient' }"
              @input="console.log(ingredients[index])"
            />
          </div>
          <BaseButton @click.prevent="addIngredient" type="button">Add Ingredient</BaseButton><br>

          <BaseLabel>Instructions</BaseLabel>
          <div v-for="(instruction, index) in instructions" :key="index" class="mb-3">
            <BaseFormControler
              :id="'instruction-' + index"
              elementType="input"
              v-model="instructions[index]"
              :attrs="{ type: 'text', placeholder: 'Add new instruction' }"
            />
          </div>
          <BaseButton @click.prevent="addInstruction" type="button">Add Instruction</BaseButton>

          <BaseFormControler
            id="category"
            label="Category"
            elementType="select"
            :attrs="{ value: '', placeholder: 'Select a category' }"
          >
            <option value="" disabled>Select a category</option>
            <option value="appetizer">Appetizer</option>
            <option value="main-course">Main Course</option>
            <option value="dessert">Dessert</option>
          </BaseFormControler>
          <BaseButton type="submit" btnClass="w-100 bg-primary submit-btn">Submit</BaseButton>
        </BaseForm>
      </main>
    </template>
  </HomePageLayout>
</template>

<style scoped>
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

/* Add a pseudo element under the card-title as line */
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
