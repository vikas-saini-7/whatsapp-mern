import { configureStore } from '@reduxjs/toolkit'

import authReducer from './reducers/authSlice';
import conversationReducer from './reducers/conversationSlice';
import messageReducer from './reducers/messageSlice';

const store = configureStore({
    reducer: {
        auth: authReducer,
        conversation: conversationReducer,
        message: messageReducer
    }
})

export default store;