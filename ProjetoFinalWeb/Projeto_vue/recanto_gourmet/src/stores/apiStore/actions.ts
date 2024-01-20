import axiosClient from '@/axiosClient';
import { Commit } from 'vuex';

interface Meal {
  // Defina a estrutura do objeto Meal conforme necessário
  // por exemplo: idMeal: string, nome: string, etc.
}

export function searchMeals({ commit }: { commit: Commit }, keyword: string): void {
  axiosClient.get(`search.php?s=${keyword}`)
    .then(({ data }: { data: { meals: Meal[] } }) => {
      commit('setSearchedMeals', data.meals);
    })
    .catch((error: Error) => {
      // Trate erros aqui, se necessário
      console.error('Erro ao buscar refeições:', error);
    });
}

export function searchMealsByLetter({ commit }: { commit: Commit }, letter: string): void {
  axiosClient.get(`search.php?f=${letter}`)
    .then(({ data }: { data: { meals: Meal[] } }) => {
      commit('setMealsByLetter', data.meals);
    })
    .catch((error: Error) => {
      console.error('Erro ao buscar refeições por letra:', error);
    });
}

export function searchMealsByIngredient({ commit }: { commit: Commit }, ing: string): void {
  axiosClient.get(`filter.php?i=${ing}`)
    .then(({ data }: { data: { meals: Meal[] } }) => {
      commit('setMealsByIngredients', data.meals);
    })
    .catch((error: Error) => {
      console.error('Erro ao buscar refeições por ingrediente:', error);
    });
}
