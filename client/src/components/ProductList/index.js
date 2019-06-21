import * as React from 'react'
import styled from 'styled-components'
import ProductCard from '../ProductCard'

const List = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  width: 60%;
  height: 100%;

  padding: 20px 0px;

  div + div {
    margin-top: 10px;
  }
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;

  width: 100%;

  & > div + div {
    margin-top: 10vh;
  }
`

const rowFormatter = products => {
  let pair = []
  for (let i = 0; i < products.length; i++) {
    if (i % 2 === 0) pair.push([])
    pair[Math.floor(i/2)].push(products[i])
  }
  return pair
}

const ProductList = props => (
  <List>
    { props.products && rowFormatter(props.products).map(pair => (
      <Row>
        {pair[0] && <ProductCard product={pair[0]} />}
        {pair[1] && <ProductCard product={pair[1]} />}
      </Row>
    ))}
  </List>
)

export default ProductList
