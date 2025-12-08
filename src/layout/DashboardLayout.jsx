import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { FiBook, FiUser, FiCreditCard, FiMenu, FiHome } from "react-icons/fi";
import { useState } from "react";

const DashboardLayout = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const navigate = useNavigate();

    return (
        <div className="flex min-h-screen bg-gray-100 text-gray-900">

            {/* Sidebar */}
            <aside className={`bg-white p-6 shadow-md transition-all duration-300 ${sidebarOpen ? "w-64" : "w-16"}`}>

                {/* Dashboard / Home Logo */}
                <div
                    className={`flex items-center gap-2 mb-6 cursor-pointer`}
                    onClick={() => navigate("/")} 
                >
                    <FiHome size={24} />
                    {sidebarOpen && <h2 className="text-2xl font-bold">Dashboard</h2>}
                </div>

                {/* Sidebar Toggle */}
                <button
                    className="text-gray-700 mb-6"
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                >
                    <FiMenu size={24} />
                </button>

                {/* Navigation Links */}
                <ul className="space-y-3">
                    <li>
                        <NavLink
                            to="/dashboard/orders"
                            className={({ isActive }) =>
                                `flex items-center gap-2 btn btn-sm w-full justify-start bg-gray-200 hover:bg-gray-300 ${isActive && "bg-gray-300"}`
                            }
                        >
                            <FiBook size={18} />
                            {sidebarOpen && "My Orders"}
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/dashboard/profile"
                            className={({ isActive }) =>
                                `flex items-center gap-2 btn btn-sm w-full justify-start bg-gray-200 hover:bg-gray-300 ${isActive && "bg-gray-300"}`
                            }
                        >
                            <FiUser size={18} />
                            {sidebarOpen && "My Profile"}
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/dashboard/invoices"
                            className={({ isActive }) =>
                                `flex items-center gap-2 btn btn-sm w-full justify-start bg-gray-200 hover:bg-gray-300 ${isActive && "bg-gray-300"}`
                            }
                        >
                            <FiCreditCard size={18} />
                            {sidebarOpen && "Invoices"}
                        </NavLink>
                    </li>
                </ul>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-8">
                <Outlet />
            </main>
        </div>
    );
};

export default DashboardLayout;
