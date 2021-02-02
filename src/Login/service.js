export function login(email,password) {
    // return fetch(`/api/login/${email}/${password}`)
    return fetch('/api/users/random_user')
    .then(data => data.json())
}