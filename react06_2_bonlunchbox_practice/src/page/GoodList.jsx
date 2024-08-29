import React from 'react'
import axios from 'axios'
import { useEffect } from 'react';
import GoodItem from '../components/GoodItem'

/*
실습1. axios를 활용하여 도시락 정보를 가진 URL로 데이터 호출

실습2.받아온 데이터를 보관할 STATE 생성
      (콘솔창으로 데이터 출력 >> 확인작업)
*/

const GoodList = () => {


  const getProductDetail = async () =>{
    const DATA_URL = "http://localhost:3004/goods_list"
    const res = await axios.get(DATA_URL)
    const data = res.data

    console.log(data);
    
  }

  useEffect(()=>{
    getProductDetail()
  },[])

  

  return (
    <div>
      <GoodItem/>
      <GoodItem/>
      <GoodItem/>
    </div>
  )
}

export default GoodList