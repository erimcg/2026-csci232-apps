import { createRouter, createWebHistory } from 'vue-router'

import LoginView from '@/views/LoginView.vue'
import AboutView from '@/views/AboutView.vue'
import NotFoundView from '@/views/NotFoundView.vue'

import UserView from '@/views/UserView.vue'

const routes = [
  { path: '/', component: LoginView },
  { path: '/about', component: AboutView },

  { path: '/user/:uid', component: UserView},
  { path: '/user/:uid/message/:mid', component: UserView},

  { path: '/:pathMatch(.*)*', component: NotFoundView }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
