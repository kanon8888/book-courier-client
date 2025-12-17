import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/book-3.webp';

const Logo = () => {
    return (
        <Link to="/" className="flex items-center gap-3">
            <img
                className='w-[70px] h-[70px] rounded-full object-cover'
                src={logo}
                alt="Book Courier Logo"
            />
            <h2 className='text-3xl font-bold tracking-wide'>
                <span className='text-4xl text-orange-400'>Book</span>
                <span className='text-4xl text-yellow-400'>Courier</span>
            </h2>
        </Link>
    );
};

export default Logo;
