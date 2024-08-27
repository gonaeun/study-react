import React from 'react'
import { useSearchParams } from 'react-router-dom'

const ProductDetailPage2 = () => {

    const [query, setQuery] = useSearchParams()

  
    console.log('전달받은 데이터:', query); // 콘솔을 통해 get이라는 객체 확인
    console.log('전달받은 데이터:', query.get("prd_no"));  // 쿼리스트링방식은 직접 키값을 문자열 형태로 써줘야함
    // console.log('전달받은 데이터:', query.get("prd_no"), query.get("cate"));  // 쿼리스트링 방식 이런식으로 여러개 값 적을 수 있음
    
  return (
    <div>
        <h1>ProductDetailPage2</h1>
        <p>번 상품</p>
    </div>
  )
}

export default ProductDetailPage2