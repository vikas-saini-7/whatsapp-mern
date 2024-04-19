import { createSlice } from "@reduxjs/toolkit";
import { getAllConversations, getConversation } from "../actions/conversationActions";


const initialState = {
    users: [],
    activeConversation: {},
    conversationData: {},
    searchedConversations: [],
    loading: false,
    error: null
}

const conversationSlice = createSlice({
    name: 'auth',
    initialState:initialState,
    reducers:{
        setActiveConversation: (state, action) => {
            state.activeConversation = action.payload;
        },
        searchConversation: (state, action) => {
            let searchText = (action.payload || '').toLowerCase().trim(); // Convert searchText to lowercase for case-insensitive search
            let filteredConversations = state.users.filter(user => user.name.toLowerCase().includes(searchText));
            state.searchedConversations = filteredConversations;
        }
    },
    extraReducers: builder => {
        builder.addCase(getAllConversations.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(getAllConversations.fulfilled, (state, action) => {
            state.loading = false;
            state.users = action.payload;
            state.searchedConversations = action.payload;
        });
        builder.addCase(getAllConversations.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });

        builder.addCase(getConversation.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(getConversation.fulfilled, (state, action) => {
            state.loading = false;
            state.conversationData = action.payload;
        });
        builder.addCase(getConversation.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
    }
})
export const {setActiveConversation, searchConversation} = conversationSlice.actions;

export default conversationSlice.reducer;