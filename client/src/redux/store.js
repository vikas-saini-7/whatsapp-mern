import { configureStore } from '@reduxjs/toolkit'
import authReducer from './reducers/authSlice';
import conversationReducer from './reducers/conversationSlice';
const store = configureStore({
    reducer: {
        auth: authReducer,
        conversation: conversationReducer
    }
})

export default store;