import React from 'react';
import Banner from '../Bananr/Banner';
import Book from '../Book/Book';
import Icon from '../Icon/Icon';

const Home = () => {
    return (
        <div className='mt-10'>
            <Banner></Banner>
            <Icon></Icon>
            <Book></Book>
        </div>
    );
};

export default Home;