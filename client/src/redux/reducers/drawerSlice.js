import { createSlice } from "@reduxjs/toolkit";
import { getMessages, sendMessage } from "../actions/messageActions";

const initialState = {
    isOpen: false,
}

const drawerSlice = createSlice({
    name: 'auth',
    initialState:initialState,
    reducers:{
        openDrawer: (state, action) => {
            state.isOpen = true
        },
        closeDrawer: (state, action) => {
            state.isOpen = false
        },
        toggleDrawer: (state, action) => {
            state.isOpen = !state.isOpen
        }
    },
})

export const {openDrawer, closeDrawer, toggleDrawer} = drawerSlice.actions

export default drawerSlice.reducer;