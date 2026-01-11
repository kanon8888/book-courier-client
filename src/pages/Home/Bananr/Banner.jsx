import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import book1 from "../../../assets/book-1.avif";
import book2 from "../../../assets/book-8.webp";
import book3 from "../../../assets/book-3.webp";

const Banner = () => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      showThumbs={false}
      showStatus={false}
      interval={4000}
    >
      {/* Slide 1 */}
      <div className="relative">
        <img className="h-[550px] w-full object-cover" src={book1} />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 flex items-center">
          <div className="text-white px-10 max-w-xl">
            <h1 className="text-4xl font-bold mb-4">
              Discover Your Next Favorite Book
            </h1>
            <p className="text-lg mb-6">
              Explore thousands of books and get them delivered to your door.
            </p>
            <button className="btn btn-primary">
              Explore Books
            </button>
          </div>
        </div>
      </div>

      {/* Slide 2 */}
      <div className="relative">
        <img className="h-[550px] w-full object-cover" src={book2} />

        <div className="absolute inset-0 bg-black/50 flex items-center">
          <div className="text-white px-10 max-w-xl">
            <h1 className="text-4xl font-bold mb-4">
              Fast & Reliable Book Delivery
            </h1>
            <p className="text-lg mb-6">
              Order books online and receive them quickly and safely.
            </p>
            <button className="btn btn-secondary">
              Order Now
            </button>
          </div>
        </div>
      </div>

      {/* Slide 3 */}
      <div className="relative">
        <img className="h-[550px] w-full object-cover" src={book3} />

        <div className="absolute inset-0 bg-black/50 flex items-center">
          <div className="text-white px-10 max-w-xl">
            <h1 className="text-4xl font-bold mb-4">
              Knowledge Delivered to You
            </h1>
            <p className="text-lg mb-6">
              Read more, learn more, grow more with our book service.
            </p>
            <button className="btn btn-accent">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default Banner;
