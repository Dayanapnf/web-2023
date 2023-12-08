<script setup lang="ts">
import {ref, onMounted} from 'vue'
import { isAxiosError } from 'axios'
import {type Receita} from '@/types'
import ReceitaCard from '@/components/ReceitaCard.vue'
import { receitaService } from '@/api/ReceitaService'
import { getUploadURL } from '@/composables/useUploadFile'

const loading = ref(true)
const receitas = ref<Receita[]>([])
const error = ref('')

onMounted(async () => {
  try {
    receitas.value = await receitaService.all()
  } catch (e) {
    if(isAxiosError(e)){
      error.value = e.response?.data.error.message
    }else if(e instanceof Error){
      error.value = e.message
    }
  } finally {
    loading.value = false
  }
})

</script>

<template>
  
  <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
    <div class="col" v-for="receita in receitas" :key="receita.id">
      <ReceitaCard
        :id="receita.id"
        :titulo="receita.titulo"
        :capa="receita.imagem"
      ></ReceitaCard>
    </div>
  </div>
</template>
