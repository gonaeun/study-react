import React, {useState} from 'react'
import api from '../api'

const Form = () => {

    const [data,setData] = useState('')
    
    const handleSubmit = async (e) => {
      e.preventDefault(); // 누르면 데이터 전송하는 기능이 중단됨!(원래는 주소창에 '?'뜸) >> 비동기 통신 해야하니까

      let res = await api.post("/getData", {data:data})
      console.log(res.data);
      
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