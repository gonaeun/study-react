import React from 'react'
import CommentItem from './CommentItem'

// 랜덤으로 고유값을 생성해주는 패키지
import { v4 as uuidv4 } from 'uuid'

const CommentList = () => {

  console.log(uuidv4());
  
  return (
    <div>
      <div>댓글수 : 0</div>
      <hr />
      <CommentItem />
    </div>
  )
}

export default CommentList
