import { connect } from "@/dbConfig/dbConfig";
import Post from "@/models/post/userPost";
import { NextRequest, NextResponse } from "next/server";

// connect();
export async function GET(request: NextRequest) {
  try {
    // Fetch all posts from the database
    const allposts = await Post.find();

    return NextResponse.json(allposts, {status:200});

  } catch (error) {

    console.error("Error fetching posts:", error);
    
    return NextResponse.json(
      { error: "An error occurred while fetching posts" },
      { status: 500 }
    );
  }
}

export default GET;