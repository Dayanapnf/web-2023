<script setup lang="ts">
import Receitas from '../components/Receitas.vue'
import { computed } from '@vue/reactivity'
import { onMounted, watch } from 'vue';
import { useRoute } from "vue-router";
import store from "../stores/apiStore/index"

const route = useRoute();
const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const receitas = computed(() => store.state.mealsByLetter);

watch(route, () => {
  if (route.params.letra) {
    store.dispatch('searchMealsByLetter', route.params.letra);
  }
});

onMounted(() => {
  if (route.params.letra) {
    store.dispatch('searchMealsByLetter', route.params.letra);
  }
});
</script>

<template>
  <div class="p-8 pb-0">
    <h1 class="text-4xl font-bold mb-4 text-orange-500">Receitas por Inicial</h1>
  </div>
  <div class="flex flex-wrap justify-center gap-3 px-8 mb-6">
    <router-link
      :to="{ name: 'porInicial', params: { letra } }"
      v-for="letra of letras"
      :key="letter"
      class="w-2 h-2 flex items-center justify-center hover:text-orange-500 hover:scale-150 transition-all"
    >
      {{ letra }}
    </router-link>
  </div>

  <Receitas :receitas="receitas" />
</template>
