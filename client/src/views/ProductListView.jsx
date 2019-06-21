import * as React from 'react'

import Background from '../components/Background'
import ProductCard from '../components/ProductCard'

const ProductListView = props => (
  <Background>
    {
      props.products.forEach(prod =>(
        <ProductCard />
      ))
    }
  </Background>
)

export default ProductListView
