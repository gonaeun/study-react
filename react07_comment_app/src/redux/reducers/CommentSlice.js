import { createSlice } from '@reduxjs/toolkit';

const CommentSlice = createSlice({
    name:'comment',
    initialState:{
        commentList:[],
        keyword:''
    },
    reducers:{
        addComment:()=>{
           
        },
        searchComment:()=>{}
    }
})

export const {addComment, searchComment} = CommentSlice.actions

export default CommentSlice.reducer