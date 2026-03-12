// simulate server-side authorization
import { useUserStore } from "@/stores/userStore"
import { storeToRefs } from "pinia"

export const checkAuthorization = async function (path) {

    const userStore = useUserStore()
    const { user } = storeToRefs(userStore)

    const username = user.value.username
    const authToken = user.value.authToken
    const roles = user.value.roles

    console.log(`Checking auth for ${username}/${authToken}/${roles} to ${path}`)

    if (!username) {
        console.log('User not found')
        return false
    }

    let authorized = false
    if (path == '/home') {
        authorized = roles.includes('user')
    }
    else if (path.startsWith('/chat')) {
        authorized = roles.includes('user')
    }
    else if (path == '/admin') {
        authorized = roles.includes('admin')
    }
    else {
        console.log('Invalid path')
    }

    console.log(`Authorized: ${authorized}`)
    return authorized
}