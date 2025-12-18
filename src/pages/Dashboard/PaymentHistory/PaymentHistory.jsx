import React from 'react';
import useAuth from '../../../hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import UseAxiosSecure from '../../../hooks/UseAxiosSecure';

const PaymentHistory = () => {
    const { user } = useAuth();
    const axiosSecure = UseAxiosSecure();

    const { data: payment = [] } = useQuery({
        queryKey: ['payments', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments?email=${user.email}`)
            return res.data;

        }
    })
    return (
        <div>
            <h2 className="text-5xl text-center text-green-300">payment History; {payment.length}</h2>
            <div className="overflow-x-auto bg-amber-100">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Amount</th>
                            <th>Paid Time</th>
                            <th>Transaction Ib</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            payment.map((payment, index) => <tr key={payment._id}>
                                <th>{index + 1}</th>
                                <td>Cy Ganderton</td>
                                <td>${payment.amount}</td>
                                <td>{payment.paidAt}</td>
                                <td>{payment.transactionIb}</td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;

///payments?email=${user.email}