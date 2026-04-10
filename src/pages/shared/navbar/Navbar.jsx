import React from 'react';
import Logo from '../../../components/logo/Logo';
import { Link, NavLink } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import ThemeToggle from '../../../components/ThemeToggle/ThemeToggle';

const Navbar = () => {
    const { user, logOut } = useAuth();

    const handleLogOut = () => {
        logOut().catch(error => console.log(error));
    };

    const links = (
        <>
            <li>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        `text-2xl transition duration-300 ${isActive
                            ? "text-green-600 font-bold"
                            : "hover:text-green-500"
                        }`
                    }
                >
                    Home
                </NavLink>
            </li>

            <li>
                <NavLink
                    to="/all-Book"
                    className={({ isActive }) =>
                        `text-2xl transition duration-300 ${isActive
                            ? "text-green-600 font-bold"
                            : "hover:text-green-500"
                        }`
                    }
                >
                    All Book
                </NavLink>
            </li>

            <li>
                <NavLink
                    to="/about-us"
                    className={({ isActive }) =>
                        `text-2xl transition duration-300 ${isActive
                            ? "text-green-600 font-bold"
                            : "hover:text-green-500"
                        }`
                    }
                >
                    About Us
                </NavLink>
            </li>

            <li>
                <NavLink
                    to="/coverage"
                    className={({ isActive }) =>
                        `text-2xl transition duration-300 ${isActive
                            ? "text-green-600 font-bold"
                            : "hover:text-green-500"
                        }`
                    }
                >
                    Coverage
                </NavLink>
            </li>
            {user && (
                <li><NavLink to="/dashboard/my-orders" className="text-2xl">Dashboard</NavLink></li>
            )}
        </>
    );

    return (
        <div className="navbar shadow-sm px-4 bg-gray-300">

            {/* LEFT */}
            <div className="navbar-start">

                {/* Mobile Menu */}
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        ☰
                    </div>

                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-10 p-4 shadow bg-white rounded-box w-64 flex flex-col gap-3 text-center"
                    >
                        {links}

                        {/* Mobile Auth Section */}
                        <div className="border-t pt-3 mt-2 flex flex-col gap-2 items-center">

                            <ThemeToggle />

                            {user ? (
                                <>
                                    <img
                                        src={user?.photoURL}
                                        alt=""
                                        className="w-12 h-12 rounded-full"
                                    />
                                    <p className="font-semibold">{user?.displayName}</p>

                                    <button
                                        onClick={handleLogOut}
                                        className="btn btn-sm btn-error w-full"
                                    >
                                        Logout
                                    </button>
                                </>
                            ) : (
                                <Link to="/login" className="btn btn-warning w-full">
                                    Login
                                </Link>
                            )}
                        </div>
                    </ul>
                </div>

                <Logo />
            </div>

            {/* CENTER (Desktop Menu) */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-2">
                    {links}
                </ul>
            </div>

            {/* RIGHT */}
            <div className="navbar-end hidden lg:flex items-center gap-4">

                <ThemeToggle />

                {user ? (
                    <div className="flex items-center gap-3">
                        <img
                            src={user?.photoURL}
                            alt=""
                            className="w-10 h-10 rounded-full"
                        />
                        <span>{user?.displayName}</span>

                        <button
                            onClick={handleLogOut}
                            className="btn btn-sm btn-error"
                        >
                            Logout
                        </button>
                    </div>
                ) : (
                    <Link to="/login" className="btn btn-warning btn-sm">
                        Login
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Navbar;