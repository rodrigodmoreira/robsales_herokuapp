import apisauce from 'apisauce'

const baseURL = process.env.NODE_ENV === 'production'
  ? 'https://robsales.herokuapp.com/api'
  : 'http://localhost:3000/api'

const api = apisauce.create({
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/json'
  }
})

export default api
