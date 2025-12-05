import React from 'react';
import logo from '../../assets/book-3.webp'

const Logo = () => {
    return (
        <div className='flex items-center gap-3'>
            <img className='w-[70px] h-[70px] rounded-full object-cover' src={logo} alt="" />
            <h2 className='text-3xl font-bold tracking-wide'><span className='text-4xl text-orange-400'>Book</span><span className='text-4xl text-yellow-400'>Courier</span></h2>
        </div>

    );
};

export default Logo;