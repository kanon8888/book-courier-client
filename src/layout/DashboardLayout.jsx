import React, { useState } from 'react';
import { CgProfile } from 'react-icons/cg';
import { FaRegCreditCard } from 'react-icons/fa';
import { MdDeliveryDining } from 'react-icons/md';
import { Link, NavLink, Outlet } from 'react-router-dom';

const DashboardLayout = () => {
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [adminMenuOpen, setAdminMenuOpen] = useState(false);
  const [librarianMenuOpen, setLibrarianMenuOpen] = useState(false);

  return (
    <div className="drawer lg:drawer-open max-w-7xl mx-auto">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />

      {/* MAIN CONTENT */}
      <div className="drawer-content">
        <nav className="navbar w-full bg-base-300">
          <label htmlFor="my-drawer-4" className="btn btn-square btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="2" fill="none" stroke="currentColor" className="size-5">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </label>
          <div className="px-4 font-bold">Book Dashboard</div>
        </nav>

        <Outlet />
      </div>

      {/* SIDEBAR */}
      <div className="drawer-side">
        <label htmlFor="my-drawer-4" className="drawer-overlay"></label>

        <ul className="menu p-4 w-64 bg-base-200 text-base-content">

          {/* HOME */}
          <li>
            <Link to="/">🏠 Home</Link>
          </li>

          {/* USER DASHBOARD */}
          <li>
            <button
              onClick={() => setUserMenuOpen(!userMenuOpen)}
              className="flex justify-between items-center text-yellow-500 text-lg"
            >
              User <span className="text-orange-400">Dashboard</span>
              <span>{userMenuOpen ? '▲' : '▼'}</span>
            </button>

            {userMenuOpen && (
              <ul className="ml-4">
                <li>
                  <NavLink to="/dashboard/my-orders">
                    <MdDeliveryDining /> My Orders
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/payment-history">
                    <FaRegCreditCard /> Payment History
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/my-profile">
                    <CgProfile /> My Profile
                  </NavLink>
                </li>
              </ul>
            )}
          </li>

          {/* ADMIN DASHBOARD */}
          <li>
            <button
              onClick={() => setAdminMenuOpen(!adminMenuOpen)}
              className="flex justify-between items-center text-yellow-500 text-lg"
            >
              Admin <span className="text-orange-400">Dashboard</span>
              <span>{adminMenuOpen ? '▲' : '▼'}</span>
            </button>

            {adminMenuOpen && (
              <ul className="ml-4">
                <li>
                  <NavLink to="/dashboard/admin/all-users">All Users</NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/admin/manage-books">Manage Books</NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/admin/profile">My Profile</NavLink>
                </li>
              </ul>
            )}
          </li>

          {/* LIBRARIAN DASHBOARD */}
          <li>
            <button
              onClick={() => setLibrarianMenuOpen(!librarianMenuOpen)}
              className="flex justify-between items-center text-yellow-500 text-lg"
            >
              Librarian <span className="text-orange-400">Dashboard</span>
              <span>{librarianMenuOpen ? '▲' : '▼'}</span>
            </button>

            {librarianMenuOpen && (
              <ul className="ml-4">
                <li>
                  <NavLink to="/dashboard/librarian/add-book">Add Book</NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/librarian/my-books">My Books</NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/librarian/orders">Orders</NavLink>
                </li>
              </ul>
            )}
          </li>

        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;
