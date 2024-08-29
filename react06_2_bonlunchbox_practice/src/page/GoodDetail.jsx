import React from 'react'

const GoodDetail = () => {
  return (
    <div className='goods-detail-box'>
      <div className='goods-detail-box-thumb'>
        <img src='https://cdn.bonif.co.kr/cmdt/20230704_xtR_1688446753736_93Kb.jpg' alt='도시락' />
      </div>
      <div className='goods-detail-box-info'>
        <div className='goods-detail-title'>
          <div className='goods-icon'>
            <em className='goods-new'>new</em>
            </div>
            <div className='goods-detail-name'>탄두리&치킨 도시락</div>
            <div className='goods-detail-txt'>한식을 넘어 세계를 담다, 세계 도시락</div>
            <div className='goods-detail-price-box'><strong>11,800</strong>원</div>
            <div className='goods-detail-summary'>풍미작렬 탄두리 치킨과 매콤담백 중독적인 맛의 커리. \n 고슬고슬 식감 제대로</div>
            
          </div>
        </div>
      </div>
      )
}

export default GoodDetail