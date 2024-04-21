import express from 'express'
const router = express.Router();
import { getConversation } from '../controller/conversatonController.js';


// router.post("/add", addConversation) 
router.post("/get", getConversation) 

export default router