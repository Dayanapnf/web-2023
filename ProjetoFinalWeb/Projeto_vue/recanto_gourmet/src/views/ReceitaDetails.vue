<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { isAxiosError } from 'axios'
import { useRoute } from 'vue-router'
import { type Receita } from '@/types'
import { getUploadURL } from '@/composables/useUploadFile'
import { receitaService } from '@/api/ReceitaService'
import CommentsContainer from '@/components/Comentario/Container.vue'

const loading = ref(true)
const receita = ref<Receita>({} as Receita) 
const error = ref('')

const route = useRoute()

onMounted(async () => {
  try {
    receita.value = await receitaService.get(Number(route.params.id))
  } catch (e) {
    if(isAxiosError(e)) {
      error.value = e.response?.data.error.message
    } else if(e instanceof Error) {
      error.value = e.message
    }
  } finally {
    loading.value = false
  }
})

</script>

<template>
    <p v-if="error">
      {{ error }}
    </p>
    <div v-else-if="!loading" class="row justify-content-center">
      <div class="col-lg-8 col-sm-12">
        <div class="card mb-3">
          <div class="row g-0">
            <div class="col-md-4">
              <img :src="getUploadURL(receita.imagem.url)" class="w-100 rounded-start" :alt="receita.imagem.alternativeText">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">{{ receita.titulo }}</h5>
                <hr>
                <div class="text-start">
                  <p class="card-text">Descrição: {{ receita.descricao }}</p>
                </div>
              </div>
            </div>
          </div>
    
        </div>
      </div>
      <div class="row">
        <CommentsContainer class="col-12" :comentarios="receita.comentarios"></CommentsContainer>
      </div>
    </div>  
    </template>