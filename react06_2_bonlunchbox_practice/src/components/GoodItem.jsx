import React from 'react'
// import { useParams } from 'react-router-dom'
// import axios from 'axios'
// import { useState, useEffect } from 'react';

const GoodItem = (item) => {

  console.log(item);
  

  return (
    <div className='goods-item'>
      <div className='goods-item-icon'>
        {
          item.new?
          <em className='goods-new'>new</em>
          : item.best?
         <em className='goods-best'>best</em>
          : ""
        }
      </div>

      <div className='goods-thumb'>
        <img src={item.img} alt='도시락상품'/>
      </div>
      
      <div className='goods-name'>
        <h4>{item.name}</h4>
        <p>
          <span>{item.price}</span>원
        </p>
      </div>
    </div>
  )
}

export default GoodItem