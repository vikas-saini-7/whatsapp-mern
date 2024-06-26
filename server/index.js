import express from "express";
import bodyParser from "body-parser";
import dotenv from 'dotenv'
import cors from 'cors'

import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import conversationRoutes from "./routes/conversationRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";
import fileRoutes from "./routes/fileRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes 
app.use('/api/user', userRoutes);
app.use('/api/conversation', conversationRoutes)
app.use('/api/message', messageRoutes)
app.use('/api/file', fileRoutes)

const PORT = process.env.PORT || 8000;

connectDB();

app.get("/test", (req, res) => {
    res.send("working")
})

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`)
})