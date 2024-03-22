"use client"
import Link from 'next/link';
import { MdAccountCircle } from "react-icons/md";
import { FaCalendarDays } from "react-icons/fa6";

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center py-4 px-8 bg-teal-600 text-white">
            {/* Left side: Logo */}
            <div>
                <Link href="/"
                    className="text-2xl font-bold">TradingGale
                </Link>
            </div>

            {/* Right side: Icons */}
            <div className="flex items-center space-x-4">
                {/* User icon */}
                <Link href={'/'}>
                    <FaCalendarDays className="text-xl cursor-pointer" size={22} />
                </Link>

                {/* Shopping cart icon */}
                <Link href={`/profile`}>
                    <MdAccountCircle className="text-xl cursor-pointer" size={28} />
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
