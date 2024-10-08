import React, { useRef } from 'react';
import api from '../api';
import { useNavigate } from 'react-router-dom'

const LoginForm = () => {

  const navigate = useNavigate();

  const id_Ref = useRef();
  const pw_Ref = useRef();

  const handleLogin = async (e) => {
      e.preventDefault();

      let loginMember = {
          id: id_Ref.current.value,
          pw: pw_Ref.current.value
      }

      let res = await api.post("/login", { login: loginMember });

      console.log(res.data);

      if(res.data.result === "success"){
        alert("로그인 성공!")

        // 로그인 성공시, session Storage에 보관
        // >> 객체를 문자열로 변환 필요 : JSON.stringify()
        console.log(JSON.stringify(res.data));
        
        // 성공상태와 닉네임을 저장할거야
        sessionStorage.setItem("userInfo", JSON.stringify(res.data));

        navigate("/")
      } else {
        alert("로그인 실패!")
      }
  }

  return (
    <div>
        <form onSubmit={handleLogin}>
            <p>
                <label>아이디:</label>
                <input type='text' ref={id_Ref} />
            </p>
            <p>
                <label>패스워드:</label>
                <input type="password" ref={pw_Ref} />
            </p>
            <p>
                <input type="submit" value="로그인" />
            </p>
        </form>
    </div>
  );
};

export default LoginForm;
