import React from 'react';
import book11 from '../../../assets/book-11.jpg'
import book12 from '../../../assets/book-12.jpg'

const Book = () => {
    return (
        <div>
            <div className="space-y-8">
                <div className="flex items-center gap-8 p-6 rounded-xl shadow-md bg-gray-300 mt-10">
                    <img
                        className="w-[280px] h-[200px] object-cover rounded-xl shadow-sm"
                        src={book11}
                        alt=""
                    />
                    <p className="text-black leading-relaxed text-lg">
                        Discover a world of stories delivered right to your door. Your favorite books arrive faster
                        and safer, making reading easier than ever with our quick and reliable service. Explore
                        thousands of books and find the perfect one for every mood and moment. We deliver knowledge,
                        imagination, and inspiration—bringing stories closer to you. Read more and worry less,
                        because we handle the delivery with care.
                    </p>
                </div>


                <div className="flex items-center gap-8 p-6 rounded-xl shadow-md bg-gray-300 mt-6">
                    <img
                        className="w-[280px] h-[200px] object-cover rounded-xl shadow-sm"
                        src={book12}
                        alt=""
                    />
                    <p className="text-black leading-relaxed text-lg">
                        Discover a world of stories delivered right to your door. Your favorite books arrive faster
                        and safer, making reading easier than ever with our quick and reliable service. Explore
                        thousands of books and find the perfect one for every mood and moment. We deliver knowledge,
                        imagination, and inspiration—bringing stories closer to you. Read more and worry less,
                        because we handle the delivery with care.
                    </p>
                </div>

            </div>

        </div>
    );
};

export default Book;