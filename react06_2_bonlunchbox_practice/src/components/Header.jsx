import React from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'

/*
실습) 각 메뉴 버튼을 클릭했을 때, 페이지가 이동되도록 연결
  - 로고 클릭 >> 메인페이지 >> Link
  - 메뉴소개 클릭 >> 상품전체목록 >> Link
  - 로그인 클릭 >> 로그인페이지 (로그인 상태에 따라 텍스트, 이동페이지 바뀌도록) >> useNavigate()
*/

const Header = ({auth, setAuth}) => {

  const navi = useNavigate();

  const goToLogin = () => {
    if(auth){
      setAuth(false)
      navi('/')
    }else{
      navi('/login')
    }
    //auth이 true이면(로그인상태이면) setAuth(false)를 호출하여 로그아웃 상태로 바꾸고, false이면 로그아웃 상태니까 로그인화면으로 이동해라
  }
  
  return (
    <div className='header-box'>
      <div className='header-box-logo'>
        <Link to={'/'}>
          <img src='https://cdn.bonif.co.kr/resources/web/css/images/logo_gnb.png' alt='로고이미지'/>
        </Link>
      </div>
      <div className='header-box-nav'>
        <ol className='header-box-nav-list'>
          <li>
            <Link to={'/menulist'}>메뉴소개</Link>
            </li>
        </ol>
      </div>
      <div className='header-box-util'>
        <button onClick={goToLogin}>{auth?"로그아웃":"로그인"}</button>
      </div>
    </div>
  )
}

export default Header