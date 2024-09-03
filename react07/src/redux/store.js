import {configureStore} from '@reduxjs/toolkit'
import counterReducer from './reducers/counterSlice'
import logger from 'redux-logger'

/*
    store: state, reducer를 관리하는 역할
           하나의 프로젝트에 하나의 store만 생성
    
    configureStore() : store를 생성하는 함수

    middleware : action과 reducer 사이에 특정 함수를 실행하는 중간 처리기 역할
    // 여기서는 리덕스 로거를 사용하기 위해 미들웨어 사용함
*/

export default configureStore({
    reducer:{
        counter: counterReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})