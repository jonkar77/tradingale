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


const storage = new CloudinaryStorage({
    cloudinary,
    params: {
        folder: 'posts', // Optional folder in Cloudinary
        allowed_formats: ['jpg', 'jpeg', 'png'], // Allowed image formats
        // You can add more parameters as needed
    } as Params & { folder: string }, // Add 'folder' property to the params object
});

const upload = multer({ storage });

export default upload;

