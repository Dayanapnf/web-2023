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
            populate: 'cover',
          }
        })
        return data.data
      }

}