import React, { useEffect, useState } from 'react';
import Banner from '../Bananr/Banner';
import Book from '../Book/Book';
import Icon from '../Icon/Icon';
import LatestBooks from '../LatestBooks/LatestBooks';
import AssociateOrgenization from '../AssociateOrgenization/AssociateOrgenization';

const Home = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShow(window.scrollY > 300);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div className='mt-10 relative'>
            <div className='bg-amber-400'>
                <Banner />
                <Icon />
            </div>

            <div className='bg-blue-400'>
                <Book />
                <LatestBooks />
            </div>

            <div className='bg-blue-400'>
                <AssociateOrgenization />
            </div>

            {/* ⬆️ Scroll To Top Button */}
            {show && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-amber-400 text-black shadow-lg flex items-center justify-center text-2xl hover:bg-amber-500 transition-all duration-300 z-50"
                >
                    ⬆️
                </button>
            )}
        </div>
    );
};

export default Home;
