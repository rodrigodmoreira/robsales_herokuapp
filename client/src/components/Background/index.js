import * as React from 'react'
import styled from 'styled-components'

const Background = props => (
  <Wrapper>
    <Children>{props.children}</Children>
    <Ellipsis zIndex='2' backgroundColor='white' size={1000} />
    <Ellipsis zIndex='1' backgroundColor='#FDE3A8' size={1500} />
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

  z-index: 3;
`

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  z-index: 0;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  background-color: #764C24;
`

const Ellipsis = styled.div`
  position: fixed;
  top: -3vh;
  right: -50vw;

  z-index: ${props => props.zIndex ? props.zIndex : 0};

  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border-radius: ${props => props.size/2}px;

  background-color: ${props => props.backgroundColor};
`