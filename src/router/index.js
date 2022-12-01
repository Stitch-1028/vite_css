import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      component: () => import('../views/login/index.vue')
    },
    {
      path: '/001',
      component: () => import('../views/001_按钮手风琴/index.vue'),
      meta: {
        theme: '001_按钮手风琴',
        number: 1
      }
    },
    {
      path: '/002',
      component: () => import('../views/002_标准手风琴/index.vue'),
      meta: {
        theme: '002_标准手风琴',
        number: 2
      }
    },
    {
      path: '/006',
      component: () => import('../views/006_悬停翻转的3D卡片/index.vue'),
      meta: {
        theme: '006_悬停翻转的3D卡片',
        number: 6
      }
    },
    {
      path: '/008',
      component: () => import('../views/008_玻璃卡片悬停效果/index.vue'),
      meta: {
        theme: '008_玻璃卡片悬停效果',
        number: 8
      }
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: import('../views/001_按钮手风琴/index.vue')
    }
  ]
})
router.beforeEach((to, form, next) => {
  if (to.path) {
    localStorage.setItem('pathUrl', to.path.split('/')[1])
    next()
  } else {
    next({ path: '/001' })
  }
})
export default router
