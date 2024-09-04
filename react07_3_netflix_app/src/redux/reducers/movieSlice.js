import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:'movieReducer',
    initialState: {},
    reducers:{}
})

export const MovieActions = movieSlice.actions
export default movieSlice.reducer