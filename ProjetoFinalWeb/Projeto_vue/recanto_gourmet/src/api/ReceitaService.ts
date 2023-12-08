import { api } from '@/api'
import { type Receita } from '@/types'
import { useUserStore } from '@/stores/userStore'

class ReceitaService {
    constructor() {}

    async  all(page = 1, pageSize = 24): Promise<Receita[]> {
        const { data } = await api.get('/receitas', {
          params: {
            'pagination[page]': page,
            'pagination[pageSize]': pageSize,
            populate: 'imagem',
          }
        })
        return data.data
      }

      async get(id: number): Promise<Receita> {
        const { data } = await api.get(`/receitas/${id}`, {
          params: {
            populate: ['imagem', 'comentarios'],
          }
        })
        return data.data
      }

}

export const receitaService = new ReceitaService()