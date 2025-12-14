import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router';
import UseAxiosSecure from '../../../hooks/UseAxiosSecure';

const Payment = () => {
    const { bookId } = useParams();
    const axiosSecure = UseAxiosSecure();
    const { isLoading, data: book } = useQuery({
        queryKey: ['books', bookId],
        queryFn: async () => {
            const res = await axiosSecure.get(`/books/${bookId}`);
            return res.data;

        }
    })

    const handlePayment = async () => {
        const paymentInfo = {
            cost: book.cost,
            bookId: book._id,
            senderEmail: book.senderEmail,
            bookName: book.bookName
        }

        const res = await axiosSecure.post('/create-checkout-session', paymentInfo);
        console.log(res.data);
        window.location.href = res.data.url

    }
    if (isLoading) {
        return <div>
            <span className='loading loading-infinity loading-xl'></span>
        </div>
    }
    return (
        <div>
            <h2>Please Pay ${book.cost} for : {book.bookName}</h2>
            <button onClick={handlePayment} className='btn btn-primary text-black'>Pay</button>
        </div>
    );
};

export default Payment;