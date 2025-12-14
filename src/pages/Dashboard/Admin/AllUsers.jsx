import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import UseAxiosSecure from "../../../hooks/UseAxiosSecure";

const AllUsers = () => {
  const axiosSecure = UseAxiosSecure();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load all users
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axiosSecure.get("/users"); 
        setUsers(res.data);
      } catch (err) {
        console.error("Error fetching users:", err);
        setUsers([]);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, [axiosSecure]);

  // DELETE USER
  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "এই ব্যবহারকারী delete হয়ে যাবে!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete!"
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axiosSecure.delete(`/users/${id}`);
          setUsers(users.filter(user => user._id !== id));
          Swal.fire("Deleted!", "User successfully deleted.", "success");
        } catch (error) {
          console.error(error);
          Swal.fire("Error!", "Could not delete user.", "error");
        }
      }
    });
  };

  // MAKE ADMIN
  const handleMakeAdmin = async (id) => {
    Swal.fire({
      title: "Make Admin?",
      text: "এই ব্যবহারকারীকে admin করা হবে।",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axiosSecure.patch(`/users/admin/${id}`);
          setUsers(users.map(user => 
            user._id === id ? { ...user, role: "admin" } : user
          ));
          Swal.fire("Success!", "User is now an Admin.", "success");
        } catch (error) {
          console.error(error);
          Swal.fire("Error!", "Could not make admin.", "error");
        }
      }
    });
  };

  if (loading) return <p>Loading users...</p>;
  if (!users.length) return <p>No users found.</p>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">All Users</h2>
      <table className="table w-full">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user._id}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td className="capitalize">{user.role}</td>
              <td className="flex gap-2">
                {user.role !== "admin" && (
                  <button 
                    onClick={() => handleMakeAdmin(user._id)} 
                    className="btn btn-sm btn-success"
                  >
                    Make Admin
                  </button>
                )}
                <button 
                  onClick={() => handleDelete(user._id)} 
                  className="btn btn-sm btn-error"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllUsers;
