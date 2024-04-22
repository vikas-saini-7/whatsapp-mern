import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

const BASE_URL = "http://localhost:8000"

export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async (credentials, thunkAPI) => {
        try {
            const response = await axios.post(`${BASE_URL}/api/user/add`, credentials);
            return response.data.userDetails;
        } catch (error) {
            console.log("Error Logging In:", error.message)
            return thunkAPI.rejectWithValue(error.message);
        }
})
