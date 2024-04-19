import { createSlice } from "@reduxjs/toolkit";
import { sendMessage } from "../actions/messageActions";

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
        builder.addCase(sendMessage.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(sendMessage.fulfilled, (state, action) => {
            state.loading = false;
            state.loading = false;
        });
        builder.addCase(sendMessage.rejected, (state, action) => {
            state.loading = false;
        });
    }
})
export const {setActiveConversation, searchConversation} = conversationSlice.actions;

export default conversationSlice.reducer;