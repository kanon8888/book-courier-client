import React from 'react';
import Banner from '../Bananr/Banner';
import Book from '../Book/Book';
import Icon from '../Icon/Icon';
import LatestBooks from '../LatestBooks/LatestBooks';



const Home = () => {
    return (
        <div className='mt-10'>
            <div className='bg-amber-400'>
                <Banner></Banner>
                <Icon></Icon>
            </div>
            <div className='bg-blue-400'>
                <Book></Book>
                <LatestBooks></LatestBooks>
            </div>
            
        </div>
    );
};

export default Home;