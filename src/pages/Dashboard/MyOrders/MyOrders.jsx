import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from '../../../hooks/useAuth';
import UseAxiosSecure from '../../../hooks/UseAxiosSecure';
import { FiEdit } from 'react-icons/fi';
import { FaTrash } from 'react-icons/fa';
import Swal from 'sweetalert2';

const MyOrders = () => {
    const { user } = useAuth();
    const axiosSecure = UseAxiosSecure();

    const { data: books = [] } = useQuery({
        queryKey: ['myOrders', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/books?email${user.email}`);
            return res.data;

        }
    });

    const handleBookDelete = id => {
        console.log(id);

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                
                // Swal.fire({
                //     title: "Deleted!",
                //     text: "Your file has been deleted.",
                //     icon: "success"
                // });
            }
        });

    }

    return (
        <div>
            <h2>All of my orders : {books.length}</h2>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Cost</th>
                            <th>Payment Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            books.map((book, index) => <tr key={book._id}>
                                <th>{index + 1}</th>
                                <td>{book.bookName}</td>
                                <td>{book.cost}</td>
                                <td>Blue</td>
                                <td>
                                    <button className="btn btn-square hover:bg-amber-400 mx-2" >
                                        <FiEdit></FiEdit>
                                    </button>

                                    <button
                                        onClick={() => handleBookDelete(book._id)}
                                        className="btn btn-square hover:bg-amber-400 mx-2">
                                        <FaTrash />
                                    </button>


                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;