<script setup lang="ts">

const { meal }: { meal: Meal } = defineProps({
  meal: {
    required: true,
    type: Object
  }
});

interface Meal {
  idMeal: string;
  strMealThumb: string;
  strMeal: string;
  strInstructions: string;
  strYoutube: string;
}
</script>

<template>
    <div
      class="bg-white shadow rounded-xl hover:scale-105 transition-all"
    >
      <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
        <img
          :src="meal.strMealThumb"
          :alt="meal.strMeal"
          class="rounded-t-xl w-full h-48 object-cover"
        />
      </router-link>
      <div class="p-3">
        <h3 class="font-bold">{{ meal.strMeal }}</h3>
        <p class="mb-4">
          {{ $filters.truncateWords(meal.strInstructions, 20) }}
        </p>
      </div>
    </div>
  </template>
  
 
  