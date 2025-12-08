import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaUsers, FaBook, FaShoppingCart } from 'react-icons/fa';

import useRole from '../hooks/UseRole';
import useAuth from '../hooks/useAuth';


const DashboardLayout = () => {
    const { user } = useAuth();
    const { role } = useRole();

    return (
        <div className="drawer lg:drawer-open max-w-7xl mx-auto">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />

            <div className="drawer-content">
                <nav className="navbar w-full bg-base-300">
                    <label htmlFor="my-drawer-4" className="btn btn-square btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </label>
                    <div className="px-4 font-bold">Book Dashboard</div>
                </nav>

                {/* Main content */}
                <Outlet />
            </div>

            <div className="drawer-side">
                <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
                <ul className="menu p-4 w-64 bg-base-200">

                    {/* User Links */}
                    <li>
                        <NavLink to="/dashboard/my-orders">
                            <FaShoppingCart /> My Orders
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/my-profile">
                            <FaUsers /> My Profile
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/invoices">
                            <FaBook /> Invoices
                        </NavLink>
                    </li>

                    {/* Librarian Links */}
                    {role === 'librarian' && <>
                        <li>
                            <NavLink to="/dashboard/add-book">
                                <FaBook /> Add Book
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/my-books">
                                <FaBook /> My Books
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/orders">
                                <FaShoppingCart /> Orders
                            </NavLink>
                        </li>
                    </>}
                </ul>
            </div>
        </div>
    );
};

export default DashboardLayout;
