import React from 'react'
import CommentItem from './CommentItem'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const CommentList = () => {
  
  // [store의 state 접근 방법]
  // 1. store 내에 있는 reducer의 key에 접근 : stste.comment
  // 2. slice 내에 정의된 state에 접근 : state.comment.commentList
  const commentList = useSelector(state=>state.comment.CommentList)
  
  console.log(commentList);
  
  
  return (
    <div>
      <div>댓글수 : {commentList.length}</div>
      {/* 배열이니까 댓글수는 length로 확인 */}
      <hr />
      {commentList.map((item)=>(
         <CommentItem key={item.id} comment={item} />
       ))}
    </div>
  )
}

export default CommentList
