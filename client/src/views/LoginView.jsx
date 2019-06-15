import * as React from 'react'

import Background from '../components/Background'
import Image from '../components/Image'
import LoginBox from '../components/LoginBox'
import RobsalesLogo from '../@robsales/assets/RobsalesLogo.png'

const LoginView = props => (
  <Background>
    <Image src={RobsalesLogo} width='200px' />
    <LoginBox
      username={props.login.username}
      password={props.login.password}
      onUsernameChange={props.onUsernameChange}
      onPasswordChange={props.onPasswordChange}
      onLoginClick={props.onLoginClick}
    />
  </Background>
)

export default LoginView
