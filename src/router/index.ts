import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import Login from '@/views/login.vue'

import Home from '@/views/home/Home.vue'
import Search from '@/views/home/search/search.vue'
import { User } from '@/views/home/user/user'



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
      },
      {
        path: 'user',
        name: 'user',
        component: User,
      },
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
