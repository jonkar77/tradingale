"use client"
// Import necessary modules/components
import React, { useState, useEffect } from "react";
// import { useRouter } from "next/router";
import axios from "axios";
import { toast } from "react-hot-toast";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Home from "../page";
import Navbar from "../components/Navbar/page";

// Define the SignupPage component
export default function SignupPage() {
    // Initialize state variables
    const router = useRouter();
    const [user, setUser] = useState({
        email: "",
        password: "",
        confirmPass: "",
    });
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [loading, setLoading] = useState(false);
    const [passwordError, setPasswordError] = useState("");

    // Function to handle signup process
    const onSignup = async () => {
        try {
            setLoading(true);
            const response = await axios.post("/api/users/signup", user);
            // console.log("Signup success", response.data);
            router.push("/login");
            // Reset form fields after successful signup
            setUser({
                email: "",
                password: "",
                confirmPass: "",
            });
            // Show success message
            toast.success("Signup successful!");
        } catch (error: any) {
            console.log("Signup failed", error.message);
            toast.error("Signup failed. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    // Effect to enable/disable signup button based on form validity
    useEffect(() => {
        if (
            user.email.length > 0 &&
            user.password.length > 0 &&
            user.confirmPass.length > 0 &&
            user.password === user.confirmPass
        ) {
            setButtonDisabled(false);
            setPasswordError("");
        } else if (user.confirmPass.length > 0 && user.password !== user.confirmPass) {
            setPasswordError("Password and confirm password do not match.");
            setButtonDisabled(true);
        } else {
            setButtonDisabled(true);
        }
    }, [user]);

    // Assuming you store the token in a cookie called 



    // Render the SignupPage component
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
                <h1 className="text-3xl mb-4">{loading ? "Processing" : "Signup"}</h1>
                <hr className="mb-4" />

                {/* Email input */}
                <div className="mb-4">
                    <label htmlFor="email" className="block mb-2">Email</label>
                    <input
                        className="p-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:border-gray-600"
                        id="email"
                        type="text"
                        value={user.email}
                        onChange={(e) => setUser({ ...user, email: e.target.value })}
                        placeholder="Email"
                    />
                </div>

                {/* Password input */}
                <div className="mb-4">
                    <label htmlFor="password" className="block mb-2">Password</label>
                    <input
                        className="p-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:border-gray-600"
                        id="password"
                        type="password"
                        value={user.password}
                        onChange={(e) => setUser({ ...user, password: e.target.value })}
                        placeholder="Password"
                    />
                </div>

                {/* Confirm password input */}
                <div className="mb-4">
                    <label htmlFor="confirmPass" className="block mb-2">Confirm Password</label>
                    <input
                        className="p-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:border-gray-600"
                        id="confirmPass"
                        type="password"
                        value={user.confirmPass}
                        onChange={(e) => setUser({ ...user, confirmPass: e.target.value })}
                        placeholder="Confirm Password"
                    />
                </div>

                {/* Password error message */}
                {passwordError && <p className="text-red-500 mb-4">{passwordError}</p>}

                {/* Signup button */}
                <button
                    onClick={onSignup}
                    disabled={buttonDisabled}
                    className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                >
                    {loading ? "Processing" : "Signup"}
                </button>

                {/* Link to login page */}
                <p className="mt-4 text-center">Already have an account? <Link href="/login" className="text-blue-500">Login</Link></p>
            </div>
        </div>
    );


}
