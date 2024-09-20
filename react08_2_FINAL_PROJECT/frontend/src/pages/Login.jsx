import React, { useRef } from 'react'
import api from '../api' 
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'


const Login = ({setNick}) => {

    const id_ref = useRef()
    const pw_ref = useRef()
    const navigate = useNavigate()

    const sendLogin = async (e) =>{

        // 전송하고, 새로고침 안 되도록 막아주기
        e.preventDefault()

        let loginData = {
            id : id_ref.current.value,
            pw : pw_ref.current.value
        }

        let res = await api.post('/user/login', loginData)

        if(res.data.result === "success"){
            sessionStorage.setItem('nick', res.data.nick);
            setNick(res.data.nick)
            navigate('/');
        }else{
            alert("로그인 실패");
            Swal.fire({
                title: 'Error!',
                text: '로그인 실패!!',
                icon: 'error',
              })
        }
    }

  return (
    <div className='content'>
        <form onSubmit={sendLogin}>
            <p>
                <label>ID:</label>
                <input type='text' ref={id_ref}/>
            </p>
            <p>
                <label>PW:</label>
                <input type='password' ref={pw_ref}/>
            </p>
            <p>
                <input type='submit' value='Login'/>
            </p>
        </form>
    </div>
  )
}

export default Login