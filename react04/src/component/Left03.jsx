import React from 'react'
// 공유공간에 접근할 수 있는 기능
import { useContext } from 'react'   // 공유공간에 접근
import { AppContext } from '../App'  // 어디 공유공간에 접근할지

const Left03 = () => {

    // data : 공유되고 있는 값
    // data = {
    //     set : num
    //     setState : setNum
    // }
    const data = useContext(AppContext);
    // 공유되고 있는 값은 많을 수 있으므로, 어떤 값을 가져올건지 적어줘야해 >> AppContext 값을 가져오자
    // AppContext.Provider가 되어있어야 AppContext 값이 가져와짐

    return (
        <div>
            <h1>Left03</h1>
            {/* <h1>{data}</h1> */}
            <h1>{data.state}</h1>
        </div>
    )
}

export default Left03