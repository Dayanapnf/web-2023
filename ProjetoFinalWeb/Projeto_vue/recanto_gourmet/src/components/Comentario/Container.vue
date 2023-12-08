<script setup lang="ts">
import { Comentario } from '../../types';
import CommentCard from './CommentCard.vue'

defineProps<{
  comentarios: Comentario[]
}>()
</script>

<template>
  <section>
    <h4>Avaliações</h4>
    <hr>
    <template v-if="comentarios.length > 0">
      <CommentCard v-for="comentario in comentarios" :key="comentario.id" :description="comentario.descricao"
        :rating="comentario.nota"></CommentCard>
    </template>
    <template v-else>
      Nenhum comentário feito até o momento
    </template>
  </section>
</template>