import React from 'react';
import Logo from '../../../components/logo/Logo';
import { Link, NavLink, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import ThemeToggle from '../../../components/ThemeToggle/ThemeToggle';

const Navbar = () => {
    const { user, logOut } = useAuth();
    const location = useLocation();
    console.log(user)

    const handleLogOut = () => {
        logOut().catch(error => console.log(error));
    };

    const links =
        <>
            <ul className="flex items-center gap-4">
                <li>
                    <NavLink
                        to="/"
                        className="relative inline-flex items-center justify-start px-4 py-2 overflow-hidden font-medium transition-all rounded group"
                    >
                        <span className="w-36 h-36 rounded rotate-[-40deg] bg-green-500 absolute bottom-0 left-0 -translate-x-full translate-y-full mb-7 ml-7 ease-out duration-500 transition-all group-hover:ml-0 group-hover:mb-24 group-hover:translate-x-0"></span>
                        <span className="relative text-black transition-colors duration-300 group-hover:text-white">
                            Home
                        </span>
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to="/all-Book"
                        className="relative inline-flex items-center justify-start px-4 py-2 overflow-hidden font-medium transition-all rounded group"
                    >
                        <span className="w-36 h-36 rounded rotate-[-40deg] bg-green-500 absolute bottom-0 left-0 -translate-x-full translate-y-full mb-7 ml-7 ease-out duration-500 transition-all group-hover:ml-0 group-hover:mb-24 group-hover:translate-x-0"></span>
                        <span className="relative text-black transition-colors duration-300 group-hover:text-white">
                            All Book
                        </span>
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to="/about-us"
                        className="relative inline-flex items-center justify-start px-4 py-2 overflow-hidden font-medium transition-all rounded group"
                    >
                        <span className="w-36 h-36 rounded rotate-[-40deg] bg-green-500 absolute bottom-0 left-0 -translate-x-full translate-y-full mb-7 ml-7 ease-out duration-500 transition-all group-hover:ml-0 group-hover:mb-24 group-hover:translate-x-0"></span>
                        <span className="relative text-black transition-colors duration-300 group-hover:text-white">
                            About Us
                        </span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/coverage"
                        className="relative inline-flex items-center justify-start px-4 py-2 overflow-hidden font-medium transition-all rounded group"
                    >
                        <span className="w-36 h-36 rounded rotate-[-40deg] bg-green-500 absolute bottom-0 left-0 -translate-x-full translate-y-full mb-7 ml-7 ease-out duration-500 transition-all group-hover:ml-0 group-hover:mb-24 group-hover:translate-x-0"></span>

                        <span className="relative text-black transition-colors duration-300 group-hover:text-white">
                            Coverage
                        </span>
                    </NavLink>
                </li>


                {
                    user && <>
                        <li>
                            <NavLink
                                to="/dashboard/my-orders"
                                className="relative inline-flex items-center justify-start px-4 py-2 overflow-hidden font-medium transition-all rounded group"
                            >
                                <span className="w-36 h-36 rounded rotate-[-40deg] bg-red-500 absolute bottom-0 left-0 -translate-x-full translate-y-full mb-7 ml-7 ease-out duration-500 transition-all group-hover:ml-0 group-hover:mb-24 group-hover:translate-x-0"></span>

                                <span className="relative text-black transition-colors duration-300 group-hover:text-white">
                                    Dashboard
                                </span>
                            </NavLink>
                        </li>

                    </>
                }
            </ul>






        </>
        ;

    return (
        <div className="navbar shadow-sm px-4 bg-gray-300">

            {/* Left Section */}
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>

                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>

                <Logo />
            </div>

            {/* Center Menu */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>

            {/* Right Section */}
            <div className="navbar-end flex items-center gap-4">

                {/* Theme Toggle */}
                <ThemeToggle />

                {user ? (
                    <div className="flex items-center gap-3">

                        {/* Profile Image */}
                        <img
                            src={user?.photoURL}
                            alt="User"
                            className="w-10 h-10 rounded-full border shadow"
                        />

                        {/* Name */}
                        <span className="font-semibold hidden sm:block">
                            {user?.displayName}
                        </span>

                        {/* Logout */}
                        <button
                            onClick={handleLogOut}
                            className="relative inline-flex items-center justify-center px-4 py-2 btn-sm overflow-hidden font-medium transition-all bg-red-400 rounded-lg shadow text-white group hover:bg-red-500 hover:shadow-lg"
                        >
                            <span className="w-24 h-24 rounded rotate-[-40deg] bg-red-600 absolute bottom-0 left-0 -translate-x-full translate-y-full mb-4 ml-4 ease-out duration-500 transition-all group-hover:ml-0 group-hover:mb-16 group-hover:translate-x-0"></span>
                            <span className="relative text-white transition-colors duration-300 text-sm">
                                Log Out
                            </span>
                        </button>

                    </div>
                ) : (
                    <Link
                        to="/login"
                        className="relative inline-flex items-center justify-center px-4 py-2 btn-sm overflow-hidden font-medium transition-all bg-amber-400 rounded-lg shadow text-black group hover:bg-amber-500 hover:shadow-lg"
                    >
                        <span className="w-24 h-24 rounded rotate-[-40deg] bg-amber-600 absolute bottom-0 left-0 -translate-x-full translate-y-full mb-4 ml-4 ease-out duration-500 transition-all group-hover:ml-0 group-hover:mb-16 group-hover:translate-x-0"></span>
                        <span className="relative transition-colors duration-300 text-sm">
                            Login
                        </span>
                    </Link>

                )}
            </div>
        </div>
    );
};

export default Navbar;
