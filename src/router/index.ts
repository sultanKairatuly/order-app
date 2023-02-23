import { createRouter, createWebHistory } from 'vue-router'
import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Home',
        alias: '/home',
        component: () => import('../pages/HomePage.vue')
    },
    {
        path: '/receipts',
        name: 'Receipts',
        component: () => import('../pages/PitReceipts.vue')
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router