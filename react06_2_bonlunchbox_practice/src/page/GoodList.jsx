import React from 'react'
import axios from 'axios'
import { useEffect } from 'react';
import GoodItem from '../components/GoodItem'
import { useState } from 'react';

/*
실습1. axios를 활용하여 도시락 정보를 가진 URL로 데이터 호출

실습2.받아온 데이터를 보관할 STATE 생성
      (콘솔창으로 데이터 출력 >> 확인작업)

실습3. state에 저장된 도시락 정보 출력
      - 도시락 정보는 GoodItem 컴포넌트에 props로 전달
      - map() 함수 활용
*/

const GoodList = () => {

  const [goods, setGoods] = useState(null)


  const getProductDetail = async () =>{
    const DATA_URL = "http://localhost:3004/goods_list"
    const res = await axios.get(DATA_URL)
    const data = res.data
    console.log(data);
    
    setGoods(data)
    console.log('변경된State값',data);
    
  }

  useEffect(()=>{
    getProductDetail()
  },[])

  

  return (
    <div className='goods-list'>
      {goods?.map((item)=><GoodItem key={item.id} img={item.main_thumb} name={item.name} price={item.price}/>)}
      
    </div>
  )
}

export default GoodList