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
  
  console.log(CommentList, keyword);
  
  
  return (
    <div>
      <div>댓글수 : {CommentList.length}</div>
      {/* 배열이니까 댓글수는 length로 확인 */}
      <hr />
      {CommentList.map((item)=>(
         <CommentItem key={item.id} comment={item} />
       ))}
    </div>
  )
}

export default CommentList
