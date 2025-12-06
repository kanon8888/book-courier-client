import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import book1 from '../../../assets/book-1.avif'
import book2 from '../../../assets/book-2.jpg'
import book3 from '../../../assets/book-3.webp'

const Banner = () => {
    return (
        <Carousel autoPlay={true}
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
        >
            <div>
                <img className="w-100px h-[550px] object-cover " src={book1} />
                <p className="legend">Legend 1</p>
            </div>

            <div>
                <img className="w-100px h-[550px] object-cover " src={book2} />
                <p className="legend">Legend 2</p>
            </div>

            <div>
                <img className="w-100px h-[550px] object-cover " src={book3} />
                <p className="legend">Legend 3</p>
            </div>

        </Carousel>
    );
};

export default Banner;