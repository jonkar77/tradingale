"use client";
// ProfilePage.js (or ProfilePage.tsx for TypeScript)
import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import Sidebar from "../components/Sidebar/page";

export default function ProfilePage() {
  const [data, setData] = useState("nothing");

  const getUserDetails = async () => {
    try {
      const res = await axios.get('/api/users/me');
      setData(res.data.data._id);
    } catch (error) {
      console.error("Error fetching user details:", error);
      toast.error("Error fetching user details");
    }
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col flex-1 items-center justify-center h-screen py-2">
        <h1>Profile</h1>
        <hr />
        <p>Profile page</p>
        <h2 className="p-1 rounded bg-green-500">
          {data === 'nothing' ? "Nothing" : <Link href={`/profile/${data}`}>{data}</Link>}
        </h2>
        <hr />
        <button
          onClick={getUserDetails}
          className="bg-green-800 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          GetUser Details
        </button>
      </div>
    </div>
  );
}
