import { watch, ref } from 'vue'
import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'

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
    console.log('User already logged in.')

    // TODO: fetch User information from API server
  }

  watch(() => user.value.username, (newName) => {
    if (newName) {
      user.value.displayName = newName.charAt(0).toUpperCase() + newName.slice(1)
    }
  },
    { immediate: true }
  )

  async function createAccount(user) {

    const host = 'https://stingray-app-u3bsh.ondigitalocean.app'

    const url = host + '/user'
    const options = {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user),
    }

    console.log(`POST /user`)

    try {
      const response = await fetch(url, options)
      console.log(`Response status: ${response.status}`)

      if (!response.ok) {
        const result = await response.json()
        console.log(result)

        switch (response.status) {
          case 400:
            console.log('Validation error')
            Object.values(result.errors).forEach(err => console.log(`${err.message}`))
            break
          case 409:
            console.log('Duplicate account')
            break
        }
        return
      }

      // success

      console.log('User account created')
      router.push('/login')
    }
    catch (error) {
      console.log(error)
    }

  }

  async function login(username, password) {
    console.log('userStore: login()')

    const host = 'https://stingray-app-u3bsh.ondigitalocean.app'

    const url = host + '/user/login'
    const options = {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username, password }),
    }

    console.log(`POST /user/login`)

    try {
      const response = await fetch(url, options)
      console.log(`Response status: ${response.status}`)

      if (!response.ok) {
        console.log('Invalid credentials')
        return
      }

      const result = await response.json()
      console.log(result)

      user.value = result.user
      localStorage.setItem('username', result.user.username)
      localStorage.setItem('authToken', result.authToken)

      router.push('/home')
    }
    catch (error) {
      console.log(error)
    }
  }

  function logout() {
    console.log('userStore: logout()')
    user.value = {}
    localStorage.clear()

    router.push('/login')
  }

  return { user, login, logout, createAccount }
})
