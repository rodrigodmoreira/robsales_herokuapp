import * as React from 'react'
import api from '../@robsales/api'
import useDynamicState from '../@robsales/hooks/DynamicState'

import LoginView from '../views/LoginView'

const LoginContainer = props => {
  const [login, setLogin] = useDynamicState({ username: '', password: '' })

  const onUsernameChange = (event) => {
    setLogin('username')(event.target.value)
  }
  const onPasswordChange = (event) => {
    setLogin('password')(event.target.value)
  }
  const onLoginClick = async (event) => {
    const res = await api.post('/login', { username: login.username, password: login.password })

    if (res.ok) {
      localStorage.setItem('token', res.data.token)
      api.setHeader('Authorization', `Bearer ${res.data.token}`)
      api.get('/listProducts') // teste

      props.history.push('/products')
    } else {
      localStorage.setItem('token', null)
      api.setHeader('Authorization', `Bearer ${null}`)
    }
  }
  const onSignUpClick = async (event) => {
    props.history.push('/signup')
  }

  return (
    <LoginView
      login={login}
      onUsernameChange={onUsernameChange}
      onPasswordChange={onPasswordChange}
      onLoginClick={onLoginClick}
      onSignUpClick={onSignUpClick}
    />
  )
}

export default LoginContainer
