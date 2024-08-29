import React from 'react'

/*
실습) 썸네일 클릭 >> 도시락 상세페이지로 이동하도록
     URL패턴 : '/menulist/:id'
*/

const GoodItem = ({item}) => {

  console.log(item);
  

  return (
    <div className='goods-item'>
      <div className='goods-item-icon'>
        {
           item.new?
           <em className='goods-new'>new</em>
           :item.best?
           <em className='goods-best'>best</em>
           :" "
        }
      </div>

      <div className='goods-thumb'>
        <img src={item.main_thumb} alt='도시락상품'/>
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