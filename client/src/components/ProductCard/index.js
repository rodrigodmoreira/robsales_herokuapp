import * as React from 'react'
import styled from 'styled-components'

import Paper from '../Paper'

const Wrapper = styled.div`
  width: 200px;
  height: 400px;
`

const ProductCard = props => (
  <Paper>
    <Wrapper>
      Card
    </Wrapper>
  </Paper>
)

export default ProductCard
