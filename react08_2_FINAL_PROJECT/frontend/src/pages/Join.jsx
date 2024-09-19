import React from 'react'
import { useRef } from 'react'
import api from '../api' 

const Join = () => {

    const id_ref = useRef()
    const pw_ref = useRef()
    const nick_ref = useRef()

    const sendJoin = async (e) =>{
        e.preventDefault()
        
        let joinData = {
            id : id_ref.current.value,
            pw : pw_ref.current.value,
            nick : nick_ref.current.value
        }
        let res = await api.post('/user/join', joinData)
    }

  return (
    <div className='content'>
        <form onSubmit={sendJoin}>
            <p>
                <label>ID:</label>
                <input type='text' ref={id_ref}/>
            </p>
            <p>
                <label>PW:</label>
                <input type='password' ref={pw_ref}/>
            </p>
            <p>
                <label>NICK:</label>
                <input type='text' ref={nick_ref}/>
            </p>
            <p>
                <input type='submit' value='Login'/>
            </p>
        </form>
    </div>
  )
}

export default Join