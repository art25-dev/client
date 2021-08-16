import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { 
    name: 'home',
    path: '/',
    component: () => import('../components/Carousel.vue')
    
  },
  { 
    name: 'load',
    path: '/load',
    component: () => import('../components/Load.vue')
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
