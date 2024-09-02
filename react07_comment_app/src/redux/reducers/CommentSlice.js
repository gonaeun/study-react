import { createSlice } from '@reduxjs/toolkit';

const CommentSlice = createSlice({
    name:'',
    initialState:{
        commentList:[],
        keyword:''
    },
    reducers:{
        addComment:()=>{},
        searchComment:()=>{}
    }
})

export const CommentActions = CommentSlice.actions

export default CommentSlice.reducer