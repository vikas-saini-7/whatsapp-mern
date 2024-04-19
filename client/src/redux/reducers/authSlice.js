import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "../actions/authActions";


const initialState = {
    user: [],
    isAuthenticated: false,
    loading: false,
    error: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState:initialState,
    reducers:{},
    extraReducers: builder => {
        builder.addCase(loginUser.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload;
            state.isAuthenticated = true;
        });
        builder.addCase(loginUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
    }
})

export default authSlice.reducer