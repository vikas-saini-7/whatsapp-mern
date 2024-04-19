import express from 'express'
import { addUser, allUsers } from '../controller/userController.js';
const router = express.Router();


router.post("/add", addUser) // p:working
router.get("/all", allUsers) // p:working

export default router