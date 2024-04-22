import { createAsyncThunk } from '@reduxjs/toolkit';
import socket from '../../utils/socket';
import { setConnected } from "../reducers/socketSlice";

export const connectSocket = () => (dispatch) => {
    socket.on('connect', () => {
      dispatch(setConnected(true));
    });
  
    socket.on('disconnect', () => {
      dispatch(setConnected(false));
    });
};


export const getUsersFromSocket = createAsyncThunk(
  'socket/getUsers',
  async (user, thunkAPI) => {
    socket.emit('addUsers', user);

    return new Promise((resolve, reject) => {
      socket.once('getUsers', (users) => {
        resolve(users);
      });

      socket.once('error', (error) => {
        console.error('Socket error: socket/getUsers', error);
        reject(error);
      });
    });
  }
);