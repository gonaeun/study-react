import React from 'react'

const Join = () => {
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
                <label>NICK:</label>
                <input type='text'/>
            </p>
            <p>
                <input type='submit' value='Login'/>
            </p>
        </form>
    </div>
  )
}

export default Join