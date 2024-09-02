import { createSlice } from '@reduxjs/toolkit';

const CommentSlice = createSlice({
    name:'comment',
    initialState:{
        commentList:[],
        keyword:''
    },
    reducers:{
        addComment:(state)=>{
            state.count +=1
        },
        searchComment:()=>{}
    }
})

export const CommentActions = CommentSlice.actions

export default CommentSlice.reducer