"use client"
import Link from 'next/link';
import { MdAccountCircle } from "react-icons/md";
import { FaCalendarDays } from "react-icons/fa6";
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

interface NavbarProps {
    // Add any props if needed
}

const Navbar: React.FC<NavbarProps> = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
    const router=useRouter();
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleLogout = () => {
        // Add your logout logic here
        console.log('Logout clicked');
    };
    const logoutHandler = async () => {
        try {
            await axios.get('/api/users/logout')
            // toast.success('Logout successful')
            router.push('/login')
        } catch (error: any) {
            console.log(error.message);
            // toast.error(error.message)
        }
    }

    return (
        <nav className="flex justify-between items-center py-4 px-8 bg-teal-600 text-white">
            {/* Left side: Logo */}
            <div>
                <Link href="/" className="text-2xl font-bold">TradingGale</Link>
            </div>

            {/* Right side: Icons */}
            <div className="flex items-center space-x-4 relative">
                {/* User icon */}
                <Link href={'/'}>
                    <FaCalendarDays className="text-xl cursor-pointer" size={22} />
                </Link>
                {/* User icon */}
                <div onClick={toggleDropdown} className="relative">
                    <MdAccountCircle className="text-xl cursor-pointer" size={28} />
                    {/* Dropdown menu */}
                    {isDropdownOpen && (
                        <div className="absolute right-0 z-50 mt-2 w-48 bg-white border border-gray-200 rounded shadow-md">
                            <div className="py-1">
                                <Link href="/profile">
                                    <span className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                        Profile
                                    </span>
                                </Link>
                                <span
                                    className="block px-4 py-2 cursor-pointer text-sm text-gray-700 hover:bg-gray-100"
                                    onClick={logoutHandler}
                                >
                                    Logout
                                </span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
