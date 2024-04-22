import { createSlice } from '@reduxjs/toolkit';
import { getUsersFromSocket } from '../actions/socketActions';

const initialState = {
    users: [],
    loading: false,
    isConnected: false,
};

const socketSlice = createSlice({
  name: 'socket',
  initialState,
  reducers: {
    setConnected(state, action) {
      state.isConnected = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsersFromSocket.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUsersFromSocket.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(getUsersFromSocket.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setConnected } = socketSlice.actions;

export default socketSlice.reducer;
