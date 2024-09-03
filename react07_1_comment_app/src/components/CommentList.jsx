import React from 'react'
import CommentItem from './CommentItem'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const CommentList = () => {
  
  // [store의 state 접근 방법]
  // 1. store 내에 있는 reducer의 key에 접근 : stste.comment
  // 2. slice 내에 정의된 state에 접근 : state.comment.commentList

  // const commentList = useSelector(state=>state.comment.CommentList)
  // >> commentSlice.js에서 CommentReducer의 {state,commentList,keyword} 중 commentList 에 접근 한 것
  // >> 이 중, 접근해야하는 state가 여러개인 경우, 아래와 같이 구조분해할당 문법으로 저장
  // *주의점 : 객체에 정의된 key이름과 동일한 변수명으로 정의!
  const {CommentList, keyword} = useSelector(state=>state.comment)

  // 검색키워드 결과를 보관하는 state
  const [filter, setFilter] = useState([])
  
  console.log(CommentList, keyword);

  useEffect(()=>{
    // 내용 중 수업이라는 단어가 있는지 검색할거야

    if(keyword === ""){
      setFilter(CommentList)     // 키워드가 공백이면, 전체리스트를 필터에 그대로 저장 (비워져있으면 그대로 출력하라는 뜻)
    }else{
      let list = CommentList.filter((item)=>item.content.includes(keyword)) // 키워드가 있다면, CommentList를 키워드를 포함하는 항목들만 필터링 한 후
      setFilter(list)   // SetFilter를 통해 필터링 된 리스트를 필터 상태에 저장
    }
  },[CommentList, keyword]) // 업데이트 될 때마다~
  
  
  return (
    <div>
      <div>댓글수 : {filter.length}</div>
      {/* 배열이니까 댓글수는 length로 확인 */}
      <hr />
      {filter.map((item)=>(
         <CommentItem key={item.id} comment={item} />
       ))}
    </div>
  )
}

export default CommentList
