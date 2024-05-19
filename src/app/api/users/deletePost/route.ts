import Post from "@/models/post/userPost";
import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(request: NextRequest) {
    const Data = await request.json();
    // console.log("_id: ",id);
    const id = Data.id
    if (Data.id) {
        // Delete the post from the database
        const post = await Post.findByIdAndDelete(id);
        console.log(post);
        if (post) {
            return NextResponse.json({ message: 'Post deleted successfully' }, { status: 200 });
        } else {
            return NextResponse.json({ message: 'Post not found' }, { status: 404 });
        }
        return NextResponse.json({ message: 'Post deleted successfully' }, { status: 200 });
    }




    

    return NextResponse.json({ message: 'Invalid request' }, { status: 400 });
}