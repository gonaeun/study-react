import React from 'react'

const Header = () => {
  return (
    <div className='header-box'>
      <div className='header-box-logo'>
        <img src='https://cdn.bonif.co.kr/resources/web/css/images/logo_gnb.png' alt='로고이미지'/>
      </div>
      <div className='header-box-nav'>
        <ol className='header-box-nav-list'>
          <li>메뉴소개</li>
        </ol>
      </div>
      <div className='header-box-util'>
        <button>로그인</button>
      </div>
    </div>
  )
}

export default Header