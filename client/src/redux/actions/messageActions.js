import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

const BASE_URL = "http://localhost:8000"

export const sendMessage = createAsyncThunk(
    'auth/sendMessage',
    async (message) => {
        try {
            const response = await axios.post(`${BASE_URL}/api/message/send`, message);
            return response.data;
        } catch (error) {
            console.log("Error in sendMessage", error.message)
            return error.message;
        }
})

export const getMessages = createAsyncThunk(
    'auth/getMessages',
    async (id) => {
        try {
            const response = await axios.get(`${BASE_URL}/api/message/get/${id}`);
            console.log(response.data)
            return response.data;
        } catch (error) {
            console.log("Error in getMessages", error.message)
            return error.message;
        }
})

export const uploadFile = createAsyncThunk(
    'message/uploadFile',
    async (data) => {
        try {
            const response = await axios.post(`${BASE_URL}/api/file/upload`, data);
            console.log(response.data)
            return response.data;
        } catch (error) {
            console.log("Error in uploadFile", error.message)
            return error.message;
        }
})
