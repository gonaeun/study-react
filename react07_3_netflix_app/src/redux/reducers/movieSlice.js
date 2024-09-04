import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:'movie',
    initialState: {
        popularMovies: {},
        topRatedMovies: {},
        upcomingMovies: {},
    },
    reducers:{}
})

export const MovieActions = movieSlice.actions
export default movieSlice.reducer