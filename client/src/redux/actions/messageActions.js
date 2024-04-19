import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

const BASE_URL = "http://localhost:8000"

export const getAllConversations = createAsyncThunk(
    'auth/getAllConversations',
    async () => {
        try {
            const response = await axios.get(`${BASE_URL}/api/user/all`);
            return response.data;
        } catch (error) {
            console.log("Error in getAllConversations", error.message)
            return error.message;
        }
})
