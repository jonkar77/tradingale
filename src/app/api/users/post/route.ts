// src/app/api/upload/route.ts
import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export async function POST(request: Request) {
  const formData = await request.formData();
  const file = formData.get('file');

  if (file instanceof File) {
    const filePath = path.join(process.cwd(), 'public', file.name);
    
    // Convert ArrayBuffer to Buffer
    const buffer = Buffer.from(await file.arrayBuffer());
    
    const res= await fs.writeFile(filePath, buffer);
    console.log(file);
    
    return NextResponse.json({ message: 'File uploaded at backend' , formData});
  }

  return NextResponse.json({ message: 'No file uploaded' }, { status: 400 });
}