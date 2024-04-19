import { createSlice } from "@reduxjs/toolkit";
import { getAllConversations } from "../actions/conversationActions";


const initialState = {
    messages: [],
    loading: false,
    error: null
}

const conversationSlice = createSlice({
    name: 'auth',
    initialState:initialState,
    reducers:{
    },
    extraReducers: builder => {
        builder.addCase(getAllConversations.pending, (state, action) => {
            state.loading = true;
        });
    }
})
export const {setActiveConversation, searchConversation} = conversationSlice.actions;

export default conversationSlice.reducer;