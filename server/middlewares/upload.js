import multer from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage';

import dotenv from 'dotenv';

dotenv.config();

const storage = new GridFsStorage({
    url: process.env.MONGO_URI,
    options: { useNewUrlParser: true },
    file: (request, file) => {
        const match = ["image/png", "image/jpg"];

        if(match.indexOf(file.memeType) === -1){
            console.log("hii");
            return`${Date.now()}-blog-${file.originalname}`;
        }

        return { bucketName: "photos", filename: `${Date.now()}-blog-${file.originalname}`}
    }
});

export default multer({storage}); 