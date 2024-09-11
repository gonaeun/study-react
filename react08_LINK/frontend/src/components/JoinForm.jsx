import React, {useState} from 'react'
import api from '../api'

const JoinForm = () => {
    const [ userId, setUserId ] = useState('');
    const [ userPw, setUserPw ] = useState('');
    const [ userNick, setUserNick ] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        let res = await api.post("/join", { userId, userPw, userNick })
        console.log(res.data.result === "success"? "회원가입성공":"회원가입실패");
        alert(res.data.result === "success"? "회원가입성공":"회원가입실패");
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder="아이디 입력" value={userId} onChange={(e)=>setUserId(e.target.value)}/>
            <input type='password' placeholder="비밀번호 입력"  value={userPw} onChange={(e)=>setUserPw(e.target.value)}/>
            <input type='text' placeholder="닉네임 입력"  value={userNick} onChange={(e)=>setUserNick(e.target.value)}/>
            <button type="submit">회원가입</button>
        </form>
    </div>
  )
}

export default JoinForm