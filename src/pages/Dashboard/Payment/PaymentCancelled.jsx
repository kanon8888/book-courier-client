import React from 'react';
import { Link } from 'react-router';

const PaymentCancelled = () => {
    return (
        <div>
            <h2>Payment is cancelled. Please try again</h2>
            <Link to="/dashboard/my-orders">
            <button className='btn text-orange-400'>Try<span className='text-yellow-400'> Again</span></button>
            </Link>
        </div>
    );
};

export default PaymentCancelled;