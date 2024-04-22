import { createSlice } from "@reduxjs/toolkit";
import { getMessages, sendMessage } from "../actions/messageActions";

const initialState = {
    isOpen: false,
}

const drawerSlice = createSlice({
    name: 'auth',
    initialState:initialState,
    reducers:{
        openModal: (state, action) => {
            state.isOpen = true
        },
        closeModal: (state, action) => {
            state.isOpen = true
        },
        toggleModal: (state, action) => {
            state.isOpen = true
        }
    },
})

export const {openModal, closeModal, toggleModal} = drawerSlice.actions

export default drawerSlice.reducer;