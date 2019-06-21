import * as React from 'react'
import styled from 'styled-components'

import Paper from '../Paper'

const Wrapper = styled.div`
  width: 15vw;
  height: 50vh;
  padding: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
`
const Panel = styled.div`
  ${props => props.width ? `width: ${props.width};` : ''}
  ${props => props.height ? `height: ${props.height};` : ''}
  ${props => props.background ? `background: ${props.background};` : ''}
`

const Text = styled.div`
  ${props => props.fontSize ? `font-size: ${props.fontSize};` : ''}
  ${props => props.color ? `color: ${props.color};` : ''}
  ${props => props.justifyText ? 'text-align: justify; text-justify: inter-word;' : ''}
`

const ProductCard = props => (
  <Paper>
    <Wrapper>
      <Panel height='80%' width='100%' background={`hsl(${Math.random()*1000 % 360}, 90%, 84%)`} />
      <Text color='#764C24'>{props.product.nome}</Text>
      <Text color='#A5774C' justifyText>{props.product.descricao}</Text>
    </Wrapper>
  </Paper>
)

export default ProductCard
