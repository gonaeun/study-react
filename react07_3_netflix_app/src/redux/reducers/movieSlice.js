import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:'movie',
    initialState: {
        popularMovies: {},
        topRatedMovies: {},
        upcomingMovies: {},
    },
    reducers:{
        initData: (state, action) => {
            state.popularMovies = action.payload.popularMovies;
            state.topRatedMovies = action.payload.topRatedMovies;
            state.upcomingMovies = action.payload.upcomingMovies;
          },
        },
      });

export const {initData} = movieSlice.actions
export default movieSlice.reducer