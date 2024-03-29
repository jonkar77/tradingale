"use client";
// ProfilePage.js (or ProfilePage.tsx for TypeScript)
import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import Sidebar from "../components/Sidebar/page";
import BarChart from "../components/Analytics/BarGraph/page";

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
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="w-screen">
      <div className="ml-10 grid grid-cols-2 grid-rows-2 h-screen">
      <div className="flex items-center justify-center col-span-1 row-span-1">
        <BarChart />
      </div>
      <div className="flex items-center justify-center col-span-1 row-span-1">
        <BarChart />
      </div>
      <div className="flex items-center justify-center col-span-1 row-span-1">
        <BarChart />
      </div>
      <div className="flex items-center justify-center col-span-1 row-span-1">
        <BarChart />
      </div>
    </div>
      </div>

    </div>
  );
}
