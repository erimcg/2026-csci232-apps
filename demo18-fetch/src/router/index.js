import { createRouter, createWebHistory } from 'vue-router'
import { checkAuthorization } from '@/util/userAuthorization'

import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import CreateAccountView from '@/views/CreateAccountView.vue'
import AdminView from '@/views/AdminView.vue'
import ChatView from '@/views/ChatView.vue'

import { useUserStore } from '@/stores/userStore.js'
import { storeToRefs } from 'pinia'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", redirect: "/login" },
    { path: '/login', component: LoginView },
    { path: '/create-account', component: CreateAccountView },

    { path: "/home", component: HomeView },
    { path: '/admin', component: AdminView },

    { path: '/chat', component: ChatView },
    { 
      path: '/chat/:username', 
      component: ChatView,
      beforeEnter: (to, from) => {
        console.log(`BEFORE-ENTER: ${to.path}`)
      }
     }
  ]
})

// Global Guards

router.beforeEach(async (to, from) => {
  console.log(`beforeEach: ${to.path}`)
  console.log(to)

  const userStore = useUserStore()
  const { user } = storeToRefs(userStore)
  console.log(user.value)

  const username = localStorage.getItem('username')

  if (to.path == '/login') {
    return username ? { path: '/home' } : true
  }

  if (to.path == '/create-account') {
    return username ? { path: '/home' } : true
  }

  if (!username && to.path != '/create-account') {
    console.log('beforeEach:User not logged in - redirecting to /login')
    return { path: '/login' }
  }

  // user is logged in
  console.log('user is logged in')
  return true
})


export default router
