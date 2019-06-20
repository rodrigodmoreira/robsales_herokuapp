import * as React from 'react'

import Background from '../components/Background'
import Image from '../components/Image'
import SignUpBox from '../components/SignUpBox'
import RobsalesLogo from '../@robsales/assets/RobsalesLogo.png'

const SignUpView = props => (
  <Background>
    <Image src={RobsalesLogo} width='150px' />
    <SignUpBox
      name={props.form.name}
      username={props.form.username}
      password={props.form.password}
      rePassword={props.form.rePassword}
      onNameChange={props.onNameChange}
      onCPFChange={props.onCPFChange}
      onUsernameChange={props.onUsernameChange}
      onPasswordChange={props.onPasswordChange}
      onRePasswordChange={props.onRePasswordChange}
      onSubmitClick={props.onSubmitClick}
    />
  </Background>
)

export default SignUpView
