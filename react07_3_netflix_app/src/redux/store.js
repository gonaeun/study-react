import {configureStore} from '@reduxjs/toolkit'
import movieReducer from './reducers/movieSlice'  //movieSlice에서 리듀서 가져오기


export default configureStore({
    reducer:{
        movies: movieReducer
    }
})