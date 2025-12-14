import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from '../../../hooks/useAuth';
import UseAxiosSecure from '../../../hooks/UseAxiosSecure';
import { FiEdit } from 'react-icons/fi';
import { FaTrash } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { Link } from 'react-router';

const MyOrders = () => {
    const { user } = useAuth();
    const axiosSecure = UseAxiosSecure();

    const { data: books = [], refetch } = useQuery({
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
                axiosSecure.delete(`/books/${id}`)
                    .then(res => {
                        console.log(res.data);

                        if (res.data.deletedCount) {
                            // refresh the data in the ui
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your book request has been deleted.",
                                icon: "success"
                            });
                        }
                    })


            }
        });

    }

    const handlePayment = async (book) => {
        const paymentInfo = {
            cost: book.cost,
            bookId: book._id,
            senderEmail: book.senderEmail,
            bookName: book.bookName
        }
        const res = await axiosSecure.post('/payment-checkout-session', paymentInfo);
        console.log(res.data.url);
        window.location.assign(res.data.url);
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
                            <th>Payment</th>
                            <th>Booking Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            books.map((book, index) => <tr key={book._id}>
                                <th>{index + 1}</th>
                                <td>{book.bookName}</td>
                                <td>{book.cost}</td>
                                <td>
                                    {
                                        book.paymentStatus === 'paid' ? <span className='text-green-400'>Paid</span> :
                                            <button
                                                onClick={() => handlePayment(book)}
                                                className='btn  btn-sm btn-primary text-black'>
                                                Pay
                                            </button>
                                    }
                                </td>
                                <td>{book.bookingStatus}</td>
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