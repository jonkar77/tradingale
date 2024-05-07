import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

// Connect to the database
connect();

// Handle POST request for user login
export async function POST(request: NextRequest) {
    try {
        // Parse the request body to extract email and password
        const reqBody = await request.json();
        const { email, password } = reqBody;

        // Check if a user with the provided email exists
        const user = await User.findOne({ email });
        if (!user) {
            return NextResponse.json({ error: "User does not exist" }, { status: 400 });
        }
        
        // Verify if the provided password matches the hashed password stored in the database
        const validPassword = await bcryptjs.compare(password, user.password);
        if (!validPassword) {
            return NextResponse.json({ error: "Invalid password" }, { status: 400 });
        }
        
        // Generate a JWT token containing user data
        const tokenData = {
            id: user._id,
            username: user.username,
            email: user.email
        };
        const token = jwt.sign(tokenData, process.env.TOKEN_SECRET!, { expiresIn: "1d" });


        // Construct a JSON response indicating successful login and set an HTTP-only cookie containing the token
        const response = NextResponse.json({
            message: "Login successful",
            success: true,
        });
        response.cookies.set("token", token, {
            httpOnly: true,
            // You can set additional cookie options here, such as secure: true for HTTPS-only cookies
        });
        return response;
    } catch (error: any) {
        // Handle any errors that occur during the login process and return an appropriate error response
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
