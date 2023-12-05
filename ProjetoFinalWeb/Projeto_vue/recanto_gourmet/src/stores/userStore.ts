import { ref, computed } from 'vue'
import { defineStore } from "pinia"
import { type Usuario } from "@/types"

export const useUserStore = defineStore('user', () => {
  const user = ref<Usuario>({} as Usuario)

  const token = computed(() => user.value.jwt)

  function logout() {
    user.value = {} as Usuario
  }

  return { user, token, logout }
})