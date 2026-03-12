import { createRouter, createWebHistory } from 'vue-router'
import { checkAuthorization } from '@/util/userAuthorization'

import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import AdminView from '@/views/AdminView.vue'
import ChatView from '@/views/ChatView.vue'

import { useUserStore } from '@/stores/userStore.js'
import { storeToRefs } from 'pinia'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", redirect: "/login" },
    { path: '/login', component: LoginView },

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

  // Note: ok to use store here - after router is created
  const userStore = useUserStore()
  const { user } = storeToRefs(userStore)

  if (to.path == '/login') {
    return user.value.username ? { path: '/home' } : true
  }

  if (!user.value.username) {
    console.log('beforeEach:User not logged in - redirecting to /login')
    return { path: '/login' }
  }

  // user is logged in

  const authorized = await checkAuthorization(to.path)
  
  if (!authorized) {
    console.log(`beforeEach: User not authorized - ${user.value.username}/${user.value.authToken} to ${to.path}`)
    return from
  }

  console.log('beforeEach: authorization successful')
  return true
})

router.beforeResolve(async (to, from) => {
  console.log(`beforeResolve:  ${to.path}`)

  // all in-component guards have been run and async route components have been resolved (loaded)
  // use case: verify user has granted permission to use the camera for a particular route

  return true
})

router.afterEach((to, from, failure) => {
  console.log(`afterEach:  ${to.path}`)

  // navigation already decided: does not affect navigation
  // use case: log all router change request and the status of the request for security purposes

  return true
})


export default router
