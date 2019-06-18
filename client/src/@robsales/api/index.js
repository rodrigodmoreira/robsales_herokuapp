import apisauce from 'apisauce'

const baseURL = process.env.NODE_ENV === 'production'
  ? 'https://robsales.herokuapp.com/api'
  : 'http://localhost:3000/api'

const apiS = apisauce.create({
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': localStorage.getItem('token')
  }
})

const api = {
  ...apiS,

  login: async (username, password) => {
    const res = await apiS.post('/login', { username, password })

    if (res.ok) {
      localStorage.setItem('token', res.token)
      apiS.setHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${res.token}`
      })
    } else {
      localStorage.removeItem('token')
    }

    return res
  }
}

export default api
