import { createRouter, createWebHistory } from 'vue-router'
import { api } from '@/api'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import AboutView from '../views/AboutView.vue'
import ReceitaDetails from '../views/ReceitaDetails.vue'
import Ingredientes from '../views/Ingredientes.vue'
import ReceitaPorInicial from '../views/ReceitaPorInicial.vue'
import ReceitaForm from '../views/ReceitaForm.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/about',
      component: AboutView
    },
    {
      path: '/receitas/:id',
      component: ReceitaDetails
    },
    {
      path:'/ingredientes',
      component: Ingredientes
    },
    {
      path:'/busca-por-iniciais/:inicial?',
      name: "porIniciais",
      component: ReceitaPorInicial
    },
    {
      path:'/create-receita',
      component: ReceitaForm
    }
  ]
})

export default router

api.interceptors.response.use(response => response, error => {
  const { response } = error
  if(response && response.status != 400) {
    router.push({
      name: `${response.status}`
    })
  } else {
    return Promise.reject(error)
  }
})