import { configureStore } from '@reduxjs/toolkit'

import authReducer from './reducers/authSlice';
import conversationReducer from './reducers/conversationSlice';
import messageReducer from './reducers/messageSlice';
import socketReducer from './reducers/socketSlice';

const store = configureStore({
    reducer: {
        auth: authReducer,
        conversation: conversationReducer,
        message: messageReducer,
        socket: socketReducer,
    },
})

export default store;