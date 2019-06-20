import * as React from 'react'
import styled from 'styled-components'

import Paper from '../Paper'
import { Input, Button } from '@material-ui/core'

const Text = styled.div`
  ${props => props.fontWeight ? `font-weight: ${props.fontWeight};` : ''}
  ${props => props.color ? `color: ${props.color};` : ''}
`

const Wrapper = styled.div`
  width: 27vw;
  height: 72vh;

  padding: 10px 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`

const SignUpBox = props => (
  <Paper>
    <Wrapper>
      <Text color='#764C24' fontWeight='bold'>Página de cadastro</Text>
      <Input placeholder='Nome completo' onChange={props.onNameChange} />
      <Input placeholder='CPF' onChange={props.onCPFChange} />
      <Input placeholder='Nome de usuário' onChange={props.onUsernameChange} />
      <Input placeholder='Senha' type='password' error={props.password !== props.rePassword} onChange={props.onPasswordChange} />
      <Input placeholder='Digite a senha novamente' type='password' error={props.password !== props.rePassword} onChange={props.onRePasswordChange} />
      <Button variant='contained' color='primary' onClick={props.onSubmitClick} >CADASTRAR</Button>
    </Wrapper>
  </Paper>
)

export default SignUpBox
