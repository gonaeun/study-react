import {configureStore} from '@reduxjs/toolkit'
import TodoReducer from './reducers/TodoSlice'
import logger from 'redux-logger'

export default configureStore({
    reducer:{
        todo: TodoReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})