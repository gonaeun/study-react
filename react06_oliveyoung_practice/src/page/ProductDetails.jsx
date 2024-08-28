import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {

  // URL파라미터 방식으로 전달받은 값을 가져올 때, useParams() 사용
  // *쿼리스트링 방식은 useSearchParams() 사용
  const {id} = useParams();
  
  console.log('상품번호:', id);
  
  return (
    <div>ProductDetails</div>
  )
}

export default ProductDetails