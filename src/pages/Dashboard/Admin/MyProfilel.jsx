import React, { useState, useRef } from 'react';
import Swal from 'sweetalert2';

const MyProfilel = () => {

    const [user, setUser] = useState({
        name: "Rakib Hasan",
        email: "rakib@gmail.com",
        role: "Admin",
        photo: "https://i.ibb.co/7gFQy5p/user.png"
    });

    const fileRef = useRef();

    // 👉 click on profile pic
    const handleImageClick = () => {
        fileRef.current.click();
    };

    // 👉 image select + preview
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const url = URL.createObjectURL(file);
            setUser({ ...user, photo: url });
        }
    };

    // 👉 update profile (DB save)
    const handleUpdate = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch(`http://localhost:3000/users/${user.email}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: user.name,
                    photo: user.photo
                })
            });

            const data = await res.json();

            if (data.modifiedCount > 0) {
                Swal.fire("Updated!", "Profile successfully updated.", "success");
            } else {
                Swal.fire("Error", "No changes detected", "info");
            }

        } catch (error) {
            console.log(error);
            Swal.fire("Error", "Something went wrong", "error");
        }
    };

    return (
        <div className="max-w-xl mx-auto p-6 bg-base-100 shadow rounded">
            <h2 className="text-2xl text-center font-bold mb-6">My Profile</h2>

            {/* Profile Image */}
            <div className="flex flex-col items-center mb-6">

                <div
                    className="relative cursor-pointer"
                    onClick={handleImageClick}
                >
                    <img
                        src={user.photo}
                        alt="profile"
                        className="w-24 h-24 rounded-full object-cover border"
                    />

                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center opacity-0 hover:opacity-100 transition">
                        <span className="text-white text-xs">Change</span>
                    </div>
                </div>

                {/* Hidden Input */}
                <input
                    type="file"
                    accept="image/*"
                    ref={fileRef}
                    onChange={handleImageChange}
                    className="hidden"
                />

                <p className="font-semibold mt-2">{user.role}</p>
            </div>

            {/* Form */}
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