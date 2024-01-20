<script setup lang="ts">
import { ref, onBeforeMount } from 'vue'
import { isAxiosError } from 'axios'
import { useRouter } from 'vue-router'
import { type Receita } from '@/types'
import { getUploadURL } from '@/composables/useUploadFile'
import { receitaService } from '../api/ReceitaService'

const props = defineProps<{
  id?: number
}>()
const receita = ref<Receita>({} as Receita)

onBeforeMount( async () => {
  if(props.id) {
    receita.value = await receitaService.get(props.id)
  }
})

const imagem = ref<File>()

const router = useRouter()

const loading = ref(false)
const feedbackMessage = ref('')
const error = ref(false)


async function criarReceita() {
  if(imagem.value) {
    loading.value = true
    try {
      const { titulo, descricao } = receita.value
      await receitaService.create(titulo, descricao, imagem.value)
      feedbackMessage.value = "Receita criado com sucesso"
      setTimeout(() => {
        router.push("/admin")
      }, 2000)
    } catch (e) {
      error.value = true
      mostrarError(e)
    } finally {
      loading.value = false
    }
  } else {
    error.value = true
    feedbackMessage.value = "A capa é obrigatória"
  }
}

async function atualizarReceita() {
  loading.value = true
  try {
    const { id, titulo, descricao } = receita.value
    await ReceitaService.update(id, titulo, descricao, imagem.value)
    receita.value = await ReceitaService.get(receita.value.id)
    feedbackMessage.value = "Receita atualizado com sucesso"
  } catch (e) {
    error.value = true
    mostrarError(e)
  } finally {
    loading.value = false
  }
}

function mostrarError(e: unknown) {
  if(isAxiosError(e)) {
    const detalhes = e.response?.data.error.details.errors.map(err => err.message)
    console.log(detalhes)
    feedbackMessage.value = `${e.response?.data.error.message} ${detalhes}`
  } else if (e instanceof Error) {
    feedbackMessage.value = e.message
  } 
}

function handleFile(event: Event) {
  const inputEvent = event as InputEvent
  const target = inputEvent.target as HTMLInputElement
  const file = target.files?.item(0) as File
  imagem.value = file
}

</script>

<template>
  <div v-if="loading == false && feedbackMessage" class="col-12 alert alert-dismissible fade show" 
  :class="{ 'alert-success': !error, 'alert-danger': error }" role="alert">
    {{ feedbackMessage }}
    <button type="button" class="btn-close" aria-label="Close" @click="feedbackMessage=''"></button>
  </div>
  <img class="col-auto"  v-if="receita.imagem" :src="getUploadURL(receita.imagem.url)" />
  <div class="row text-start">
    <div class="col-12 mb-3">
      <label for="coverInput" class="form-label">Receita imagem</label>
      <input type="file" id="coverInput" accept="image/*" class="form-control" @change="handleFile">
    </div>
    <div class="col-12 mb-3">
      <label for="titleInput" class="form-label">Receita titulo</label>
      <input type="text" id="titleInput" class="form-control" placeholder="an awesome titulo" v-model="receita.titulo">
    </div>
    <div class="col-2 mb-3">
      <label for="priceInput" class="form-label">Receita descricao</label>
      <input type="text" id="priceInput" class="form-control"  placeholder="00.00" v-model="receita.descricao">
    </div>
  </div>
  <router-link to="/admin" class="btn btn-danger">Cancel</router-link>
  <button class="btn btn-info" v-if="props.id" @click="atualizarReceita" >Atualizar</button>
  <button class="btn btn-success" v-else @click="criarReceita" :disabled="!imagem" >Create</button>
</template>