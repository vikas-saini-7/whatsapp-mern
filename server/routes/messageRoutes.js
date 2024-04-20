import express from 'express'
const router = express.Router();
import { getMessages, newMessage } from '../controller/messageController.js';


router.post("/send", newMessage)
router.get("/get/:id", getMessages)

export default router