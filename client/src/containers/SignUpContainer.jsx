import * as React from 'react'
import api from '../@robsales/api'
import useDynamicState from '../@robsales/hooks/DynamicState'

import SignUpView from '../views/SignUpView'

const SignUpContainer = props => {
  const [form, setForm] = useDynamicState({
    name: '',
    cpf: '',
    username: '',
    password: '',
    rePassword: ''
  })

  const onNameChange = (event) => {
    setForm('name')(event.target.value)
  }
  const onUsernameChange = (event) => {
    setForm('username')(event.target.value)
  }
  const onCPFChange = (event) => {
    setForm('cpf')(event.target.value)
  }
  const onPasswordChange = (event) => {
    setForm('password')(event.target.value)
  }
  const onRePasswordChange = (event) => {
    setForm('rePassword')(event.target.value)
  }
  const onSubmitClick = async (event) => {
    if (form.password === form.rePassword) {
      const { ok } = await api.post('/signup', {
        name: form.name,
        cpf: form.cpf,
        username: form.username,
        password: form.password
      })

      if (ok) {
        props.history.push('/')
      }
    }
  }

  return (
    <SignUpView
      form={form}
      onNameChange={onNameChange}
      onCPFChange={onCPFChange}
      onUsernameChange={onUsernameChange}
      onPasswordChange={onPasswordChange}
      onRePasswordChange={onRePasswordChange}
      onSubmitClick={onSubmitClick}
    />
  )
}

export default SignUpContainer
