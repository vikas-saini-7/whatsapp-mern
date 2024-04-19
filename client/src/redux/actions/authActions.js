import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

const BASE_URL = "http://localhost:8000"

export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async (credentials) => {
        try {
            const response = await axios.post(`${BASE_URL}/api/user/add`, credentials);
            return response.data.userDetails;
        } catch (error) {
            console.log("Error in loginUser", error.message)
            return error.message;
        }
})
