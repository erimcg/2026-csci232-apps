import { reactive, watch, watchEffect, ref } from 'vue'
import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'
import { authenticateUser } from '@/util/userAuthentication'
import getUsers from "@/data/users.js"

// Single Source of Truth

export const useUserStore = defineStore('userStore', () => {
  const router = useRouter()

  const user = ref({
    username: localStorage.getItem('username'),
    authToken: localStorage.getItem('authToken'),
    displayName: ''
  })

  const username = localStorage.getItem('username')
  if (username) {
    console.log(`${username} already logged in.`)

    const users = getUsers()
    console.log(users)

    const currentUser = users.find(user => user.username === username)

    if (currentUser) {
      user.value = currentUser
      console.log(currentUser)
    }
    else {
      console.log('Cannot find user')
      logout()
    }
  }

  watch(() => user.value.username, (newName) => {
      if (newName) {
        user.value.displayName = newName.charAt(0).toUpperCase() + newName.slice(1)
      }
    },
    { immediate: true }
  )

  async function login(username, password) {
    console.log('userStore: login()')
    const userRecord = await authenticateUser(username, password)

    if (userRecord) {
      user.value = userRecord
      localStorage.setItem('username', userRecord.username)
      localStorage.setItem('authToken', userRecord.authToken)

      router.push('/home')
    }
    else {
      console.log('User record not found')
    }
  }

  function logout() {
    console.log('userStore: logout()')
    user.value = {}
    localStorage.clear()

    router.push('/login')
  }

  return { user, login, logout }
})
