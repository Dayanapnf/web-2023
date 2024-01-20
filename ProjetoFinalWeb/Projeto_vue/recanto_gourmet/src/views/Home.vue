<script setup lang="ts">
import {ref, onMounted, computed} from 'vue'
import store from '../stores/apiStore'
import Receitas from '../components/Receitas.vue'
import axiosClient from '@/axiosClient';

const receitas = ref<[]>([])

onMounted(async () => {
  for (let i = 0; i < 10; i++) {
    axiosClient
      .get(`random.php`)
      .then(({ data }: { data: { receitas: any[] } }) => receitas.value.push(data.receitas[0]));
  }
});
</script>

<template>
  <div class="p-8 pb-0 text-orange-500">
    <h1 class="text-4xl font-bold mb-4">Random receitas</h1>
  </div>
  <Receitas :receitas="receitas" />
</template>


<!--
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
        :imagem="receita.imagem"
      ></ReceitaCard>
    </div>
  </div>
</template>
-->