import { configureStore } from '@reduxjs/toolkit'

import authReducer from './reducers/authSlice';
import conversationReducer from './reducers/conversationSlice';
import messageReducer from './reducers/messageSlice';
import socketReducer from './reducers/socketSlice';
import drawerReducer from './reducers/drawerSlice';

const store = configureStore({
    reducer: {
        auth: authReducer,
        conversation: conversationReducer,
        message: messageReducer,
        socket: socketReducer,
        drawer: drawerReducer,
    },
})

export default store;