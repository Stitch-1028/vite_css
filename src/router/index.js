import { createRouter, createWebHashHistory } from 'vue-router'
import { useGetLocalStorage } from '@/plugins/localStorage'
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
        },
        {
          path: '/010',
          component: () => import('../views/010_图像悬停效果/index.vue'),
          meta: {
            theme: '010_图像悬停效果',
            number: 10
          }
        },
        {
          path: '/011',
          component: () => import('../views/011_人物介绍卡片/index.vue'),
          meta: {
            theme: '011_人物介绍卡片',
            number: 11
          }
        },
        {
          path: '/013',
          component: () => import('../views/013_响应式卡片悬停效果/index.vue'),
          meta: {
            theme: '013_响应式卡片悬停效果',
            number: 13
          }
        },
        {
          path: '/014',
          component: () => import('../views/014_抽屉式相册/index.vue'),
          meta: {
            theme: '014_抽屉式相册',
            number: 14
          }
        },
        {
          path: '/016',
          component: () => import('../views/016_3D旋转卡片/index.vue'),
          meta: {
            theme: '016_3D旋转卡片',
            number: 16
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
  const isToken = useGetLocalStorage('token', true)
  // 没登录 && 去登录页面
  if (!isToken && to.path == '/login') {
    next()
  } else if (!isToken && to.path != '/login') {
    // 没登录 && 去其他页面
    next({ name: 'Login', query: { msg: '给爷登录,恶心的家伙' } })
  } else if (isToken && to.path != '/login') {
    // 登录了 && 去其他页面
    localStorage.setItem('pathUrl', to.path.split('/')[1])
    next()
  } else {
    next()
  }
})
export default router
