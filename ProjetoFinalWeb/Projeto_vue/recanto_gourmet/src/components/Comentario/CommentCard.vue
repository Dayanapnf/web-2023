<script setup lang="ts">
import { Comentario } from '../../types'
import Rating from './Rating.vue'

defineProps<Omit<Comentario, "id">>()
</script>


<template>
  <div class="card m-4 text-start">
    <div class="card-body">
      <h6 class="card-subtitle">
        <Rating :value="nota"></Rating>
      </h6>
      <p class="card-text">
        {{ descricao }}
      </p>
    </div>
  </div>
</template>