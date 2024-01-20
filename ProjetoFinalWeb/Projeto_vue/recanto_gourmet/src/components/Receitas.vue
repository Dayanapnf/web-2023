<template>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 px-8">
      <MealItem v-for="meal in meals" :key="meal.idMeal" :meal="meal" />
    </div>
    <div v-if="!meals.length" class="flex justify-center text-gray-600 p-8">
      There are no meals
    </div>
  </template>
  
  <script setup lang="ts">
  import MealItem from './ReceitaItems.vue';
  
  const props = defineProps({
    meals: {
      required: true,
      type: Array as () => Array<Meal>,
    },
  });
  
  interface Meal {
    idMeal: string;
  }
  </script>
  