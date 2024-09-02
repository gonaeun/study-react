import { createSlice } from '@reduxjs/toolkit';

const CommentSlice = createSlice({
    name:'comment',
    initialState:{
        commentList:[],
        keyword:''
    },
    reducers:{
        addComment:(state, action)=>{
            console.log(action);
            
            // React state 값을 직접적으로 수정 못 함 >> push가 아닌 concat 사용해야함
            state.commentList = state.commentList.concat(action.payload) // action을 댓글내용에 추가(concat)
            
        
        },
        searchComment:()=>{}
    }
})

export const {addComment, searchComment} = CommentSlice.actions

export default CommentSlice.reducer