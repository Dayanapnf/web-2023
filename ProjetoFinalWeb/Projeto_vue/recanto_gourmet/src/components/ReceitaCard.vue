<script setup lang="ts">
import { getUploadURL } from '../composables/useUploadFile'
import { type Imagem } from '@/types'
defineProps<{
  id: number,
  titulo?: string,
  descricao?: string,
  imagem?: Imagem
}>()
</script>

<template>
    <router-link :to="`/receitas/${id}`">
      <div class="card shadow-sm">
        <img class="card-img-top" width="100%" :src="getUploadURL(imagem?.url)" :alt="imagem?.alternativeText">
        <div class="card-body">
          <h5 class="card-title">{{ titulo }}</h5>
        </div>
      </div>
    </router-link>
</template>

<style scoped>
.card-img-top:hover {
  filter: grayscale(0.9);
}
</style>