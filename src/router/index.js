import { createRouter, createWebHashHistory } from 'vue-router'
import { useUserInfo } from '@/stores/user'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/login/index.vue')
    },
    {
      path: '/',
      component: () => import('../layout/index.vue'),
      redirect: '/001',
      children: [
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
        }
      ]
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      redirect: '/'
    }
  ]
})
router.beforeEach((to, form, next) => {
  const userInfo = useUserInfo()
  // 没登录 && 去登录页面
  if (!userInfo.isLogin && to.path == '/login') {
    next()
  } else if (!userInfo.isLogin && to.path != '/login') {
    // 没登录 && 去其他页面
    next({ name: 'Login', query: { msg: '请先登录' } })
  } else if (userInfo.isLogin && to.path != '/login') {
    // 登录了 && 去其他页面
    localStorage.setItem('pathUrl', to.path.split('/')[1])
    next()
  } else {
    next()
  }
})
export default router
