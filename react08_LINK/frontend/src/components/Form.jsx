import React from 'react'

const Form = () => {

    const [data,setData] = useState('')
    
    const handleSubmit = ()=>{
        
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type='text' onChange={(e)=>setData(e.target.value)}/>
            {/* e.target은 input태그 >> value:사용자가 입력한 값을 가져와서 >> setData 함수를 통해 state에 저장하겠다 */}
            <input type='submit' value='저장'/>
        </form>
    </div>
  )
}

export default Form