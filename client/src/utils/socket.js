import { io } from 'socket.io-client';

const socket = io('http://localhost:9000'); // Change the URL to match your server

export default socket;
