"use client";
// ProfilePage.js (or ProfilePage.tsx for TypeScript)
import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import Sidebar from "../components/Sidebar/page";
import BarChart from "../components/Analytics/BarGraph/page";
import { HiChartPie, HiOutlineNewspaper, HiViewBoards } from "react-icons/hi";

export default function ProfilePage() {
  const data=[
    { path: "/profile", name: "Dashboard", icon: HiChartPie },
    { path: "/", name: "Track", icon: HiViewBoards },
    { path: "/components/Feed", name: "Feed", icon: HiOutlineNewspaper },
  ];

  return (
    <div className="flex min-h-screen">
      <Sidebar menuItems={data}/>
      </div>
  );
}
