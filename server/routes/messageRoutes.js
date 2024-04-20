import express from 'express'
const router = express.Router();
import { newMessage } from '../controller/messageController.js';


router.post("/send", newMessage)

export default router