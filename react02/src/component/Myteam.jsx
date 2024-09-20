import React from 'react'

const Myteam = (props) => {

    //JSX에서 inline style 적용할때 >> 객체 형식으로 적용 {{}}
    // 첫번째 중괄호 : js의 특정내용을 적겠다
    // 두번째 중괄호 : 객체 입력하겠다
    let mystyle = {
        border:"1px solid", 
        textAlign:"center"
    }
  return (
    <div style={mystyle}>
        <br></br>
        <p>{props.team}</p>
        <p>{props.teacher}</p>
    </div>
  )
}

// defaultProps :  데이터를 전달받지 않을 때 기본적으로 적용되는 데이터
Myteam.defaultProps = {
    teacher:"직원 선별중"
}
export default Myteam