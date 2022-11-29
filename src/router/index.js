import { createRouter,createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes:[
    {
      path: '/',
      redirect: '/001'
    },
    {
      path: '/001',
      component:()=> import('../views/001_按钮手风琴/index.vue'),
      meta:{
        theme:'001_按钮手风琴'
      }
    },
    {
      path: '/002',
      component:()=> import('../views/002_标准手风琴/index.vue'),
      meta:{
        theme:'002_标准手风琴'
      }
    },
  ]
})

export default router