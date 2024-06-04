import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '@/views/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/page=:id',
      name: 'home',
      component: MainPage
    },
    {
      path: '/',
      redirect: () => {
        // the function receives the target route as the argument
        // we return a redirect path/location here.
        return { path: '/page=1' }
      }
    }
  ]
})

export default router
