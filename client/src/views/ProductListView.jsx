import * as React from 'react'

import Background from '../components/Background'
import ProductList from '../components/ProductList'

const ProductListView = props => (
  <Background>
    <ProductList products={props.products} />
  </Background>
)

export default ProductListView
