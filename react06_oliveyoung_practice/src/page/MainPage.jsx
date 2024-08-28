import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react';
import Card from 'react-bootstrap/Card';

/*
실습1. 화면이 최초에 렌더링 되었을 때, axios를 활용해서 화장품정보를 가진 url데이터를 요청하시오
실습2. 받아온 데이터를 콘솔창에 출력하시오
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

  useEffect(()=>{
    getProductList()
  },[])

  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://image.oliveyoung.co.kr/cfimages/cf-goods/uploads/images/thumbnails/400/10/0000/0021/A00000021066105ko.jpg?l=ko" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default MainPage