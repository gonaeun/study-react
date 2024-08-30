import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = ({setAuth}) => {
  // App.js에서 로그인함수 넘겨받음

  const navi = useNavigate();

  const handleSubmit = (e) =>{
    e.preventDefault(); // 기본 동작을 중단하는 메소드 (이거 안하면, 로그인버튼 눌렀을 때, /login? 물음표가 뜸)
    console.log('동작중지!');
    
    setAuth(true)
    navi('/');
    // 로그인상태로 바뀌면 메인페이지로 돌아가도록
  }

  return (
    <div className='login-box'>
      <div className='login-box-tit'>
        <h2>로그인</h2>
      </div>
      <div className='login-box-form'>
        <form>
          <div className='input-block'>
            <input type='text' placeholder='아이디를 입력해주세요'/>
          </div>
          <div className='input-block'>
            <input type='password' placeholder='비밀번호를 입력해주세요'/>
          </div>
          <div className='submit'>
            <input type='submit' className='login-btn' onClick={handleSubmit} value='로그인'/>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login