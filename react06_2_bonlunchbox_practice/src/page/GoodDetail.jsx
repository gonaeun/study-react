import React from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react';

const GoodDetail = () => {

  const {id} = useParams()
  // id값 가져옴 >> 가져온 주소를 기반으로 상세페이지별로 정보 요청하기

  const [goodDetail, setGoodDetail] = useState(null);

  const getGood = async () =>{
    const DATA_URL = `http://localhost:3004/goods_list/${id}`
    // 가져온 id값으로 주소 가져옴 >> 주소를 기반으로 상세페이지별로 정보 요청하기
    const res = await axios.get(DATA_URL)
    const data = res.data
    console.log(data);

    setGoodDetail(data)
  }

  useEffect(()=>{
    getGood()
  },[])

  return (
    <div className='goods-detail-box'>
      <div className='goods-detail-box-thumb'>
        <img src={goodDetail?.detail.sub_thumb} alt='도시락' />
      </div>
      <div className='goods-detail-box-info'>
        <div className='goods-detail-title'>
          <div className='goods-icon'>
            {
            goodDetail?.new?
            <em className='goods-new'>new</em>
            : goodDetail?.best?
            <em className='goods-best'>best</em>
            : ""
           }
            </div>
            <div className='goods-detail-name'>{goodDetail?.name}</div>
            <div className='goods-detail-txt'>{goodDetail?.detail.txt}</div>
            <div className='goods-detail-price-box'><strong>{goodDetail?.price}</strong>원</div>
            <div className='goods-detail-summary'>{goodDetail?.detail.summary}</div>
          </div>
        </div>
      </div>
      )
}

export default GoodDetail