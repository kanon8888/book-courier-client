import React, { useState } from 'react';
import Swal from 'sweetalert2';

const MyProfilel = () => {

    const [user, setUser] = useState({
        name: "Rakib Hasan",
        email: "rakib@gmail.com",
        role: "Admin",
        photo: "https://i.ibb.co/7gFQy5p/user.png"
    });

    const handleUpdate = (e) => {
        e.preventDefault();

        

        Swal.fire(
            "Updated!",
            "Profile successfully updated.",
            "success"
        );
    };

    return (
        <div className="max-w-xl mx-auto p-6 bg-base-100 shadow rounded">
            <h2 className="text-2xl font-bold mb-6">My Profile</h2>

            <div className="flex flex-col items-center mb-6">
                <img
                    src={user.photo}
                    alt="profile"
                    className="w-24 h-24 rounded-full mb-2"
                />
                <p className="font-semibold">{user.role}</p>
            </div>

            <form onSubmit={handleUpdate} className="space-y-4">

                <div>
                    <label className="label">Name</label>
                    <input
                        value={user.name}
                        onChange={(e) =>
                            setUser({ ...user, name: e.target.value })
                        }
                        className="input input-bordered w-full"
                    />
                </div>

                <div>
                    <label className="label">Email</label>
                    <input
                        value={user.email}
                        disabled
                        className="input input-bordered w-full bg-gray-100"
                    />
                </div>

                <div>
                    <label className="label">Role</label>
                    <input
                        value={user.role}
                        disabled
                        className="input input-bordered w-full bg-gray-100"
                    />
                </div>

                <button className="btn btn-primary w-full">
                    Update Profile
                </button>
            </form>
        </div>
    );
};

export default MyProfilel;
