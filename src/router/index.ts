import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/home/Home.vue'
import Search from '@/views/home/search/search.vue'

import Login from '@/views/login.vue'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/search',
    children: [
      {
        path: 'search',
        name: 'search',
        component: Search,
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }
]

routes[0].children

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
