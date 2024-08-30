import {configureStore} from '@reduxjs/toolkit'
import counterReducer from './reducers/counterSlice'

/*
    store: state, reducer를 관리하는 역할
           하나의 프로젝트에 하나의 store만 생성
    
    configureStore() : store를 생성하는 함수
*/

export default configureStore({
    reducer:{
        counter: counterReducer
    }
})