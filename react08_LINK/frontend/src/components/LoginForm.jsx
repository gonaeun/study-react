import React, {useState} from 'react'
import api from '../api'

const LoginForm = () => {
  const [ userId, setUserId ] = useState('');
  const [ userPw, setUserPw ] = useState('');

  const handleSubmit = async (e) => {
      e.preventDefault();

      let res = await api.post("/login", { userId, userPw })
      console.log(res.data.result === "success" ? "로그인 성공":"로그인 실패");
      alert(res.data.result === "success"? "로그인 성공":"로그인 실패");
  }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder="아이디 입력" value={userId} onChange={(e)=>setUserId(e.target.value)}/>
            <input type='password' placeholder="비밀번호 입력"  value={userPw} onChange={(e)=>setUserPw(e.target.value)}/>
            <button type="submit">로그인</button>
        </form>
    </div>
  )
}

export default LoginForm