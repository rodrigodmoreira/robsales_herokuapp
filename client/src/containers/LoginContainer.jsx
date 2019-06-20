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
    const { ok } = await api.login(login.username, login.password)

    if (ok) {
      props.history.push('/menu')
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
