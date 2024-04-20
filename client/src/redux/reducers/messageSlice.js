import { createSlice } from "@reduxjs/toolkit";
import { getMessages, sendMessage } from "../actions/messageActions";

const initialState = {
    messages: [],
    loading: false,
    error: null
}

const messageSlice = createSlice({
    name: 'auth',
    initialState:initialState,
    reducers:{
    },
    extraReducers: builder => {
        // builder.addCase(sendMessage.pending, (state, action) => {
        //     state.loading = true;
        // });
        // builder.addCase(sendMessage.fulfilled, (state, action) => {
        //     state.loading = false;
        // });
        // builder.addCase(sendMessage.rejected, (state, action) => {
        //     state.loading = false;
        //     state.error = action.payload;
        // });

        builder.addCase(getMessages.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(getMessages.fulfilled, (state, action) => {
            state.loading = false;
            state.messages = action.payload;
        });
        builder.addCase(getMessages.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
    }
})
export default messageSlice.reducer;