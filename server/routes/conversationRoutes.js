import express from 'express'
const router = express.Router();
import { addConversation } from '../controller/conversatonController.js';


router.post("/add", addConversation) 

export default router