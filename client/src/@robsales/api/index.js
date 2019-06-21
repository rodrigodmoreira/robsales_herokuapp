import apisauce from 'apisauce'

const baseURL = process.env.NODE_ENV === 'production'
  ? 'https://robsales.herokuapp.com/api'
  : 'http://localhost:3000/api'

const api = apisauce.create({
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3RlIiwiaWF0IjoxNTYxMDgyODQ3fQ.LeHOetsgamx5bDPTKMbfSAKDb-thI8lRhozkAWU5aAo'
  }
})

export default api
