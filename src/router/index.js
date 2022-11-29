import { createRouter, createWebHashHistory,createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes:[
    {
      path: '/',
      redirect: '/01'
    },
    {
      path: '/01',
      component:()=> import('../views/001_nothing/index.vue')
    },
    {
      path: '/02',
      component:()=> import('../views/002_doing/index.vue')
    },
  ]
})

export default router