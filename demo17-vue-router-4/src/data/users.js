const data = [
        { username: 'joe', password: 'test', authToken: 'aaaaaaa', roles: ['user', 'admin'] },
        { username: 'mia', password: 'test', authToken: 'bbbbbbb', roles: ['user'] }
    ]

function getUsers() {
    return structuredClone(data)
}

export default getUsers