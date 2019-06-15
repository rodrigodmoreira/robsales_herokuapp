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
  height: 52vh;

  padding: 10px 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`

const LoginBox = props => (
  <Paper>
    <Wrapper>
      <Text color='#764C24' fontWeight='bold'>Mapeando o doce caseiro mais perto de você!</Text>
      <Input placeholder='Username' onChange={props.onUsernameChange} />
      <Input placeholder='Password' onChange={props.onPasswordChange} />
      <Button variant='contained' color='primary' onClick={props.onLoginClick} ><Text fontWeight='bold'>LOGIN</Text></Button>
    </Wrapper>
  </Paper>
)

export default LoginBox
