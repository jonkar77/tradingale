import { connect } from "@/dbConfig/dbConfig";
import Post from "@/models/post/userPost";
import { NextRequest, NextResponse } from "next/server";

// connect();
export async function GET(request: NextRequest) {
  try {
    // Increase the timeout for Mongoose operations
    const options = { maxTimeMS: 30000 }; // Set a timeout of 30 seconds
    const allPosts = await Post.find({}, null, options);

    return NextResponse.json(allPosts, { status: 200 });

  } catch (error) {
    console.error("Error fetching posts:", error);
    
    return NextResponse.json(
      { error: "An error occurred while fetching posts" },
      { status: 500 }
    );
  }
}

export default GET;
