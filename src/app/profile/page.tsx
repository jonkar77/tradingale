"use client";
import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import Navbar from "../components/Navbar/page";


export default function ProfilePage() {
    const router = useRouter()
    const [data, setData] = useState("nothing")
    

    const getUserDetails = async () => {
        const res = await axios.get('/api/users/me')

        console.log(data);
        setData(res.data.data._id)
    }

    return (
        <div>
            <div className="flex flex-col items-center justify-center h-[629px] py-2">
                <h1>Profile</h1>
                <hr />
                <p>Profile page</p>
                <h2 className="p-1 rounded bg-green-500">{data === 'nothing' ? "Nothing" : <Link href={`/profile/${data}`}>{data}
                </Link>}</h2>
                <hr />
                

                <button
                    onClick={getUserDetails}
                    className="bg-green-800 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >GetUser Details</button>

            </div>
            </div>
    )
}