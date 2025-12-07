import React from 'react';
import Logo from '../../../components/logo/Logo';
import { Link, NavLink, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import ThemeToggle from '../../../components/ThemeToggle/ThemeToggle';

const Navbar = () => {
    const { user, logOut } = useAuth();
    const location = useLocation();

    const handleLogOut = () => {
        logOut().catch(error => console.log(error));
    };

    const links = (
        <>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/aboutUs">About US</NavLink></li>
            <li><NavLink to="/coverage">Coverage</NavLink></li>
        </>
    );

    return (
        <div className="navbar bg-base-100 shadow-sm px-4">

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

                {/* ⭐ Theme Toggle */}
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
                            className="btn bg-red-400 btn-sm text-white">
                            Log Out
                        </button>
                    </div>
                ) : (
                    <Link className="btn bg-amber-400 btn-sm" to="/login">
                        Login
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Navbar;
