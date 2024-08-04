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
   
  });
};

const name = ref("");
const email = ref<string[]>([""]);
const message = ref<string[]>([""]);

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
            <h1 class="card-title">Contact us</h1>
          </div>
        </template>
      </Hero>

      <main class="container-lg py-5">
        <h3 class="text-center mb-4">Send us a message</h3>
        <BaseForm @submit="handleFormSubmit" class="w-50 mx-auto ">
          <BaseLabel class="fw-bold">Name</BaseLabel>
          <BaseFormControler
            id="name"
            v-model="name"
            elementType="input"
            class="mb-3"
            placeholder= 'Name'
          />
          <BaseLabel class="fw-bold">Email</BaseLabel>
          <BaseFormControler
            id="email"
            v-model="email"
            elementType="input"
            class="mb-3"
            placeholder= 'Email'
          />
          <BaseLabel class="fw-bold">Message</BaseLabel>
          <BaseFormControler
            id="message"
            v-model="message"
            elementType ='textarea'
            class="mb-3 h-50"
            placeholder= 'Message'
          />
          <BaseButton type="submit"  class="bg-primary w-100">Submit</BaseButton>
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
