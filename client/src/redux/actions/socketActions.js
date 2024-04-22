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