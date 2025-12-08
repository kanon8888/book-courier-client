import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from '../../../hooks/useAuth';
import UseAxiosSecure from '../../../hooks/UseAxiosSecure';

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