<script setup lang="ts">
import { ref } from "vue";
import NavBar from "@/components/navbars/Navbar.vue";
import HomePageLayout from "@/components/layouts/HomePageLayout.vue";
import Hero from "@/components/hero/Hero.vue";
import BaseButton from "@/components/buttons/BaseButton.vue";
import BaseForm from "@/components/forms/BaseForm.vue";
import BaseFormControler from "@/components/forms/BaseFormControler.vue";
import BaseLabel from "@/components/labels/BaseLabel.vue";

const handleFormSubmit = () => {
  console.log("Form submitted with data:", {
    title: title.value,
    ingredients: ingredients.value,
    instructions: instructions.value,
    category: category.value,
  });
};

const title = ref("");
const ingredients = ref<string[]>([""]);
const instructions = ref<string[]>([""]);
const category = ref("");

const addIngredient = () => {
  ingredients.value.push("");
};

const addInstruction = () => {
  instructions.value.push("");
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

      <main class="container-lg py-5">
        <h3 class="text-center mb-4">Share your recipe</h3>
        <BaseForm @submit="handleFormSubmit" class="w-50 mx-auto ">
          <BaseLabel class="fw-bold">Title</BaseLabel>
          <BaseFormControler
            id="title"
            v-model="title"
            elementType="input"
            class="mb-3"
             placeholder= 'Recipe title'
          />
          <BaseLabel class="fw-bold">Ingredients</BaseLabel>
          <BaseFormControler
            v-for="(ingredient, index) in ingredients"
            :key="index"
            :id="'ingredient-' + index"
            v-model="ingredients[index]"
            class="mb-3"
            elementType = 'input'
            placeholder="Add new ingredient"
            @input="console.log(ingredients[index])"
          />
          <BaseButton
            @click.prevent="addIngredient"
            type="button"
            btnClass=" bg-primary mb-3 "
            >Add Ingredient</BaseButton
          ><br />

          <BaseLabel class="fw-bold">Instructions</BaseLabel>
          <div
            v-for="(instruction, index) in instructions"
            :key="index"
            class="mb-3"
          >
            <BaseFormControler
              :id="'instruction-' + index"
              elementType="input"
              v-model="instructions[index]"
               placeholder= 'Add new instruction'
            />
          </div>
          <BaseButton
            @click.prevent="addInstruction"
            type="button"
            btnClass=" bg-primary mb-3"
            >Add Instruction</BaseButton
          ><br>
          <BaseLabel class="fw-bold">Category</BaseLabel>
          <BaseFormControler
           class="mb-3"
            id="category"
            v-model="category"
            elementType="select"
            placeholder= 'Select a category' 
          >
            <option value="" disabled>Select a category</option>
            <option value="appetizer">Appetizer</option>
            <option value="main-course">Main Course</option>
            <option value="dessert">Dessert</option>
          </BaseFormControler>
          <BaseButton type="submit" btnClass="w-100 bg-primary submit-btn"
            >Submit</BaseButton
          >
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
