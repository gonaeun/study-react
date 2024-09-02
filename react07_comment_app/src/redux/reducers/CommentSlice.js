import { createSlice } from '@reduxjs/toolkit';

const CommentSlice = createSlice({
    name:'comment',
    initialState:{
        CommentList:[],
        keyword:''
    },
    reducers:{
        addComment:(state, action)=>{
            console.log(action);
            
            // React의 배열state 값을 직접적으로 수정 못 함
            // >> push, shift, unshif 등과 같은 함수는 state를 새롭게 변경하는 동작 x
            // >> concat, map, filter(삭제), slice 등과 같은 함수는 원본을 수정하지 않고 새로운 배열 반환
            // >> push가 아닌 concat 사용해야함 (권장)
            state.CommentList = state.CommentList.concat(action.payload) // action을 댓글내용에 추가(concat)
        },
        searchComment:()=>{}
    }
})

export const {addComment, searchComment} = CommentSlice.actions

export default CommentSlice.reducer