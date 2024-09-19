import React from 'react'

const Login = () => {
  return (
    <div className='content'>
        <form>
            <p>
                <label>ID:</label>
                <input type='text'/>
            </p>
            <p>
                <label>PW:</label>
                <input type='password'/>
            </p>
            <p>
                <input type='submit' value='Login'/>
            </p>
        </form>
    </div>
  )
}

export default Login