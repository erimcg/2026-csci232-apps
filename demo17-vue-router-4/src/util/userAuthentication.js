// simulate server-side authentication

import getUsers from "@/data/users.js"

export const authenticateUser = async function(username, password) {

    console.log(`Logging in ${username}/${password}`)

    const users = getUsers()
    console.log(users)

    const user = users.find((obj) => obj.username == username && obj.password == password)

    if (user) {
        console.log('User authenticated')
        delete user.password
        return user
    }

    console.log("User not found")
    
    return null
}