<template>
  <div class="card text-bg-dark hero ">
    <img src="/hero.jpg" class="card-img" alt="..." />
    <div class="card-img-overlay flex-grow-1 align-self-center">
        <slot name="overlay-content"></slot>
    
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>

.hero {
    display: flex;
    justify-content: center;
flex-direction: column;
    color: white;
    font-size: 1.5rem;
    font-weight: bold;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    border-radius: none;
}


.card-img-overlay {
    background: rgba(0, 0, 0, 0.5);
    height: 100%;
}

.card-img {
    min-height: 35rem;
    object-fit: cover;
    background: #000;
    background-blend-mode: screen;
}

input {
    padding: 0.5rem;
    border-radius: 0.5rem;
    border: none;
    height: 3rem;
}

input:focus {
    outline: none;
}

</style>
