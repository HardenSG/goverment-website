import { createRouter, createWebHistory } from 'vue-router'
import IndexPage from '@/views/layouts/IndexPage/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'indexPage',
      component: IndexPage
    }
  ]
})

export default router
