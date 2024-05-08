import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';
import multer from 'multer';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});



const upload = multer({ storage });

export default upload;

