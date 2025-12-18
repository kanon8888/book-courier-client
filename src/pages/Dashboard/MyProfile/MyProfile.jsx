import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";


const MyProfile = () => {
    const { user } = useAuth(); 
    const [profile, setProfile] = useState({});
    const [name, setName] = useState("");
    const [photo, setPhoto] = useState("");

    useEffect(() => {
        fetch(`https://book-courier-server-bay.vercel.app/users/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setProfile(data);
                setName(data.name);
                setPhoto(data.photo);
            });
    }, [user?.email]);

    const handleUpdate = (e) => {
        e.preventDefault();

        fetch(`https://book-courier-server-bay.vercel.app/users/${user.email}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, photo })
        })
            .then(res => res.json())
            .then(() => alert("Profile Updated Successfully!"));
    };

    return (
        <div className="max-w-xl mx-auto p-6 shadow rounded-lg bg-fuchsia-200">
            <h2 className="text-2xl font-bold mb-4 text-fuchsia-200">My Profile</h2>

            <img
                src={profile.photo}
                alt="profile"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />

            <p className="text-center text-xl font-semibold">{profile.name}</p>
            <p className="text-center text-gray-500 mb-6">{profile.email}</p>

            <form onSubmit={handleUpdate} className="space-y-4">
                <input
                    type="text"
                    className="input input-bordered w-full"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Update Name"
                />

                <input
                    type="text"
                    className="input input-bordered w-full"
                    value={photo}
                    onChange={(e) => setPhoto(e.target.value)}
                    placeholder="Photo URL"
                />

                <button className="btn btn-primary w-full">Update Profile</button>
            </form>
        </div>
    );
};

export default MyProfile;
