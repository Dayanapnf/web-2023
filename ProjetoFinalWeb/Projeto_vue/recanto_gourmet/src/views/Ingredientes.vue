<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import axiosClient from "../axiosClient";
import store from "../stores/apiStore";

const router = useRouter();
const keyword = ref<string>("");
const ingredientes = ref<any[]>([]);
const computedIngredients = computed(() =>
  ingredientes.value.filter((i) =>
    i.strIngredient.toLowerCase().includes(keyword.value.toLowerCase())
  )
);

function openIngredient(ingrediente: any): void {
  store.commit('setIngredient', ingrediente);
  router.push({
    name: "byIngredient",
    params: { ingrediente: ingrediente.strIngredient },
  });
}

onMounted(() => {
  axiosClient.get("list.php?i=list").then(({ data }: { data: { meals: any[] } }) => {
    ingredientes.value = data.meals;
  });
});
</script>

<template>
  <div class="p-8 pb-0">
    <h1 class="text-4xl font-bold mb-4 text-orange-500">ingredientes</h1>
  </div>
  <div class="px-8">
    <input
      type="text"
      v-model="keyword"
      class="rounded border-2 bg-white border-gray-200 focus:ring-orange-500 focus:border-orange-500 mb-3 w-full"
      placeholder="Buscar por Ingredientes"
    />
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
      <a
        href="#"
        @click.prevent="openIngredient(ingrediente)"
        v-for="ingrediente of computedIngredients"
        :key="ingrediente.idIngredient"
        class="block bg-white rounded p-3 mb-3 shadow"
      >
        <h3 class="text-2xl font-bold mb-2">{{ ingrediente.strIngredient }}</h3>
      </a>
    </div>
  </div>
</template>
