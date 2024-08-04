<template>
    <BaseCard :recipeTitle="recipe.title" :recipeDescription="recipe.description" :ownerName="recipe.owner" :stars="recipe.rating" />
        
</template>

<script setup>
    import { ref } from 'vue';
    import BaseCard from './BaseCard.vue';

    const recipe = ref({
        title: 'Chicken Salad',
        description: 'A delicious chicken salad recipe',
        owner: 'John Doe',
        rating: 4,
        img: 'https://cdn.quasar.dev/img/chicken-salad.jpg',
    });

</script>

<style lang="scss" scoped>

</style>