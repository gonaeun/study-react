import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetailPage2 = () => {

    const {prd_no} = useParams() 

    console.log(prd_no);
    
  return (
    <div>
        <h1>ProductDetailPage2</h1>
        <p></p>
    </div>
  )
}

export default ProductDetailPage2