import React from 'react'
import { useParams } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const ProductDetails = () => {

  // URL파라미터 방식으로 전달받은 값을 가져올 때, useParams() 사용
  // *쿼리스트링 방식은 useSearchParams() 사용
  const {id} = useParams();

  console.log('상품번호:', id);
  
  return (
    <Container>
      <Row>
        <Col>
          <img src='' alt=''/>
        </Col>
        <Col>
          <p>브랜드명</p>
          <p>상품명</p>
          <p>가격</p>
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