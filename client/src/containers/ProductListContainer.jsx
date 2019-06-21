import React, { useState, useEffect } from 'react'
import api from '../@robsales/api'

import ProductListView from '../views/ProductListView'

const ProductListContainer = props => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    let canceled = false

    async function fetchData () {
      api.setHeader('Authorization', `Bearer ${localStorage.getItem('token')}`)
      const res = await api.get('/listProducts').then(res => res.data)
      if (res && res.ok && !canceled) setProducts (res.data)
    }
    fetchData()

    return () => canceled = true
  }, [])

  return (
    <ProductListView
      products={products}
    />
  )
}

export default ProductListContainer
