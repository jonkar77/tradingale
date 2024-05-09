// src/app/api/upload/route.ts
import { NextResponse } from 'next/server';
import { v2 as cloudinary } from 'cloudinary';

import Post from '@/models/post/userPost';
import User from '@/models/userModel/userModel';

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(request: Request) {
    const formData = await request.formData();
    const file = formData.get('file');
    const description = formData.get('description');
  
    if (file instanceof File && typeof description === 'string') {
        // Read the file buffer
        const fileBuffer = await file.arrayBuffer();
        
        // Convert the file buffer to a string
        const fileString = Buffer.from(fileBuffer).toString('base64');
        
        // Upload the file string to Cloudinary
        const uploadResult = await cloudinary.uploader.upload(`data:${file.type};base64,${fileString}`, {
            folder: 'posts',
            resource_type: 'auto' 
        });
        const imageUrl = await uploadResult.secure_url
        
        // Save the post to the database
        const newPost = new Post({
            image: imageUrl,
            description,
        });
        const sp= await newPost.save()
        console.log(sp);
    }
    
    console.log(file, description);
    
    return NextResponse.json({ message: 'Invalid request' }, { status: 400 });
}