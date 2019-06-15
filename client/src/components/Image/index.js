import * as React from 'react'
import styled from 'styled-components'

const Img = styled.img`
  ${props => props.width ? `width: ${props.width};` : ''}
  ${props => props.height ? `height: ${props.height};` : ''}
`

const Image = props => {
  return (
    <Img src={props.src} width={props.width} height={props.height} />
  )
}

export default Image
