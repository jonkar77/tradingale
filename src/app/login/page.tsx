"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";
import Cookies from "js-cookie";





export default function LoginPage() {
    const router = useRouter();
    const [user, setUser] = React.useState({
        email: "",
        password: "",

    })
    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    const [loading, setLoading] = React.useState(false);


    const onLogin = async () => {
        try {
            setLoading(true);
            const response = await axios.post("/api/users/login", user);
            console.log("Login success", response.data);
            toast.success("Login success");
            router.push('/');
        } catch (error: any) {
            console.log("Login failed", error.message);
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if (user.email.length > 0 && user.password.length > 0) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [user]);
    const isLoggedIn = Cookies.get('token');

    return (
        !isLoggedIn ? (
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="bg-white p-8 rounded-lg shadow-md w-96">
                    <h1 className="text-3xl mb-4">{loading ? "Processing" : "Login"}</h1>
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
    
                    {/* Login button */}
                    <button
                        onClick={onLogin}
                        disabled={buttonDisabled}
                        className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                    >
                        {loading ? "Processing" : "Login"}
                    </button>
    
                    {/* Link to signup page */}
                    <p className="mt-4 text-center">Don't have an account? <Link href="/signup" className="text-blue-500">Signup</Link></p>
                </div>
            </div>
        ) : (
            <div>
                router.push('/')
            </div>
        )
    );
    


}