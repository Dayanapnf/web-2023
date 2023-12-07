<script setup lang="ts">
import {ref, onMounted} from 'vue'
import { isAxiosError } from 'axios'
import {type Receita} from '@/types'
import ReceitaCard from '@/components/ReceitaCard.vue'

const loading = ref(true)
const receitas = ref<Receita[]>([])
const error = ref('')

onMounted(async () => {
  try {
    
  } catch (error) {
    
  }
})

</script>

<template>
  
  
</template>
