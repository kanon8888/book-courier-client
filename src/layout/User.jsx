// src/pages/Dashboard/UserDashboard/UserDashboard.jsx
import React from 'react';
import useAuth from '../hooks/useAuth';


const UserDashboard = () => {
    const { user } = useAuth();

    return (
        <div className="space-y-8">
            <h2 className="text-3xl font-bold">Welcome, {user?.displayName || 'User'}!</h2>

            {/* My Orders Section */}
            <section className="bg-white shadow-md rounded p-6">
                <h3 className="text-2xl font-semibold mb-4">My Orders</h3>
                <table className="table-auto w-full border-collapse border border-gray-300">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="border px-4 py-2">Book Title</th>
                            <th className="border px-4 py-2">Order Date</th>
                            <th className="border px-4 py-2">Status</th>
                            <th className="border px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Example row */}
                        <tr>
                            <td className="border px-4 py-2">The Great Book</td>
                            <td className="border px-4 py-2">2025-12-08</td>
                            <td className="border px-4 py-2">Pending</td>
                            <td className="border px-4 py-2 space-x-2">
                                <button className="btn btn-sm btn-red">Cancel</button>
                                <button className="btn btn-sm btn-green">Pay Now</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </section>

            {/* My Profile Section */}
            <section className="bg-white shadow-md rounded p-6">
                <h3 className="text-2xl font-semibold mb-4">My Profile</h3>
                <form className="space-y-4">
                    <div>
                        <label className="block mb-1">Name</label>
                        <input
                            type="text"
                            value={user?.displayName || ''}
                            readOnly
                            className="input input-bordered w-full"
                        />
                    </div>
                    <div>
                        <label className="block mb-1">Email</label>
                        <input
                            type="email"
                            value={user?.email || ''}
                            readOnly
                            className="input input-bordered w-full"
                        />
                    </div>
                    {/* Optionally allow profile update */}
                    <button className="btn btn-primary">Update Profile</button>
                </form>
            </section>

            {/* Invoices Section */}
            <section className="bg-white shadow-md rounded p-6">
                <h3 className="text-2xl font-semibold mb-4">Invoices</h3>
                <table className="table-auto w-full border-collapse border border-gray-300">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="border px-4 py-2">Payment ID</th>
                            <th className="border px-4 py-2">Amount</th>
                            <th className="border px-4 py-2">Date</th>
                            <th className="border px-4 py-2">Book</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Example row */}
                        <tr>
                            <td className="border px-4 py-2">pay_123456</td>
                            <td className="border px-4 py-2">$15</td>
                            <td className="border px-4 py-2">2025-12-08</td>
                            <td className="border px-4 py-2">The Great Book</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </div>
    );
};

export default UserDashboard;
