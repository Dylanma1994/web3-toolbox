import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/Layout.vue'
import { App } from 'vue'
import { useI18n } from '@/hooks/useI18n'

const { t } = useI18n()

export const routes: AppRouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/dashboard',
    component: Layout,
    name: 'root',
    meta: {
      hidden: true
    }
  },
  {
    path: '/dashboard',
    component: Layout,
    redirect: '/dashboard/index',
    meta: {
      title: 'Dashboard',
      icon: 'ant-design:home-outlined'
    },
    children: [
      {
        path: 'index',
        name: t('router.home'),
        meta: {
          title: t('router.home'),
          icon: 'ant-design:home-outlined'
        },
        component: () => import('@/views/Home.vue')
      }
    ]
  },
  {
    path: '/xnm',
    component: Layout,
    name: t('router.xnm'),
    meta: {
      title: t('router.xnm'),
      icon: 'ant-design:cloud-server-outlined'
    },
    children: [
      {
        path: 'vast_normal',
        name: t('router.vast_normal'),
        meta: {
          title: t('router.vast_normal')
        },
        component: () => import('@/views/vast/Normal.vue')
      },
      {
        path: 'vast_super',
        name: t('router.vast_super'),
        meta: {
          title: t('router.vast_super')
        },
        component: () => import('@/views/vast/Super.vue')
      }
    ]
  }
]


const router = createRouter({
  history: createWebHashHistory(),
  strict: true,
  routes: routes as RouteRecordRaw[]
})

export const setupRouter = (app: App<Element>) => {
  app.use(router)
}

export default router
