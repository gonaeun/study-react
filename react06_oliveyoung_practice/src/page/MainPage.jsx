import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

/*
실습1. 화면이 최초에 렌더링 되었을 때, axios를 활용해서 화장품정보를 가진 url데이터를 요청하시오
실습2. 받아온 데이터를 콘솔창에 출력하시오
실습3. state에 저장된 화장품 정보를 map()를 활용하여 출력
    >> Card컴포넌트 : 상품이미지, 브랜드명, 상품명, 가격, 플래그 *12번 반복
*/

const MainPage = () => {

  const [productList, setProductList] = useState(null)

  // json-server로부터 화장품 정보를 가져오는 함수
  const getProductList = async () => {
    const DATA_URL = "http://localhost:3004/products"
    const response = await axios.get(DATA_URL)
    const data = response.data


    setProductList(data)
    // data 받아온 이 시점에서 setProductList함수로 data 담아주기

    console.log(data);


  }

  useEffect(() => {
    getProductList()
  }, [])

  return (
    <Container>
      <Row>
        {productList?.map((item) => (
          <Col key={item.id}>
            <Card>
              <Card.Img variant="top" src={item.prd_img} />
              <Card.Body>
                <Card.Title className='card_title'>
                  <p>{item.prd_brand}</p>
                  <p className='card_prd_name'>{item.prd_name}</p>
                </Card.Title>
                <Card.Text className='card_text'>
                  {item.prd_price}
                </Card.Text>
                <p>
                  {(item.prd_flag).map((flag) => (
                    <span className='prd_flag rounded-fill'
                      style={{
                        backgroundColor:
                          flag === '세일' ? '#f65c60' :
                          flag === '쿠폰' ? '#9bce26' :
                          flag === '증정' ? '#6fcff7' : '#f374b7'
                          // 삼항연산자 작성. 거짓일때 >> 또 삼항연산자
                        }}>
                      {flag}
                    </span>
                  ))}
                </p>
              </Card.Body>
            </Card>
          </Col>)
        )}
      </Row>
    </Container>
  )
}

export default MainPage