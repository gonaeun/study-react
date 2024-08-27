import React from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <div>
        <Breadcrumb className='nav_divider'>
            <Breadcrumb.Item>
                <Link to={"/"}>회원가입</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
                 <Link to={"/login"}>로그인</Link> 
            </Breadcrumb.Item>
            <Breadcrumb.Item>
                 <Link to={"/"}>장바구니</Link> 
            </Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div></div>
      <div></div>
    </div>
  )
}

export default Header