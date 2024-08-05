<template>
  <div class=" ">
        <div class="card border-0">
          <div class="card-body py-4 mt-2">
            <div class="d-flex align-items-center gap-2">
                <div class=" d-flex justify-content-center mb-1">
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(15).webp"
                    class="rounded-circle shadow-1-strong " width="50" height="50" />
                </div>
                <div class="">
                    <p class="fw-bold p-0 m-0 fs-6">Maggie McLoan</p>
                    <p class="text-secondary fs-6">20 Jan 2024</p>
                </div>
            </div>
            <ul class="m-0 p-0 ">
           <span
                  v-for="star in 5"
                  :key="star"
                  class="star"
                  :class="{ filled: star <= avrageRating }"
                  >&#9733;</span>
            </ul>
            <p class="mb-2">
              Autem, totam debitis suscipit saepe
              sapiente magnam officiis quaerat necessitatibus odio assumenda perferendis
              labore laboriosam.
            </p>
          </div>
        </div>
      </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>