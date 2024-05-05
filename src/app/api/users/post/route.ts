import { NextRequest, NextResponse } from 'next/server';

export async function POST(req:NextRequest, res:NextResponse) {
    try {
        const formData = await req.json(); // Parse request body as JSON

        // console.log('Received image:', formData.image);
        console.log('Received:', formData);
        return NextResponse.json( formData );
    } catch (error) {
        console.log('Error:', error);
        // Send an error response
        return NextResponse.json({ error: 'Internal server error' });
    }
}
