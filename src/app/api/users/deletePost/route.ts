import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(request: Request) {
    const id = await request.body;
    console.log(id);
    

    return NextResponse.json({ message: 'Invalid request' }, { status: 400 });
}