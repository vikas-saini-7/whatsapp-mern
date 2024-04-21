import express from 'express'
const router = express.Router();

import upload from '../middlewares/upload.js'
import { getImage, uploadImage } from '../controller/fileController.js';

router.post('/upload', upload.single('file'), uploadImage);
router.get('/:filename', getImage);

export default router