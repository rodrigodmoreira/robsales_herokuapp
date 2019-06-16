import * as React from 'react'
import styled from 'styled-components'

import BackgroundImage from '../../@robsales/assets/Background.svg'

const Background = props => (
  <Wrapper>
    <Children>{props.children}</Children>
  </Wrapper>
)

export default Background

const Children = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  background-image: url(${BackgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #764C24;
`
