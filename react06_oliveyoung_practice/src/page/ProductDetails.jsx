import React from 'react'
import { useParams } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import axios from 'axios'
import { useState, useEffect } from 'react';

/*
  실습1. axios를 활용하여 상품 상세정보를 가진 url로 데이터 요청 (넘겨받은 상품 id 활용)
  실습2. 받아온 정보를 보관하는 state에 저장
  실습3. state에 저장된 정보를 화면에 출력 (이미지경로, 브랜드. 상품명, 가격, 옵션메뉴)
      * 옵션메뉴가 비워져있는 경우 >> 구매수량 UI
        데이터가 있는 경우 >> Bootstrap의 Forms에 있는 Select 컴포넌트로 출력
*/

const ProductDetails = () => {

  // URL파라미터 방식으로 전달받은 값을 가져올 때, useParams() 사용
  // *쿼리스트링 방식은 useSearchParams() 사용
  const {id} = useParams();

  console.log('상품번호:', id);

  // 2-1. 받아온 정보를 보관할 state 만들기
  const [productDetail, setProductDetail] = useState(null);

  // 1-1. json-server로부터 상품 상세정보 요청
  const getProductDetail = async () => {
    const DATA_URL = `http://localhost:3004/products/${id}`
    const response = await axios.get(DATA_URL)
    const data = response.data

    console.log(data);
    
    // 2-2. state에 정보 저장
    setProductDetail(data)
    
  }

  //1-2. 1-1번의 함수가 호출되도록
  useEffect(()=>{
    getProductDetail()
  },[]) //mount할 때 실행
  
  return (
    <Container>
      <Row>
        <Col>
          <img src={productDetail.prd_img} alt=''/>
        </Col>
        <Col>
          <p>{productDetail.prd_brand}</p>
          <p>{productDetail.prd_name}</p>
          <p>{productDetail.prd_price}</p>
          <p>추가 구매 할 상품정보 options 있으면 출력, 없으면 구매수량</p>
          <p>
            <Button variant="danger">장바구니</Button>{' '}
            <Button variant="outline-danger">바로구매</Button>
          </p>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductDetails