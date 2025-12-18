import React from "react"; 
import aboutImage from '../../assets/book-12.jpg'
const AboutUs = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 md:flex md:items-center md:gap-12">
        
        {/* Image */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img
            src={aboutImage}
            alt="About Us"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Text */}
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            About Us
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Welcome to BookCourier, your trusted partner in delivering knowledge and stories directly to your doorstep. Our mission is to make reading accessible, easy, and enjoyable for everyone, everywhere. We take care of your books with utmost precision and speed.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Established in 2022, BookCourier has grown to become one of the fastest and most reliable book delivery services. We value imagination, learning, and inspiration, and we aim to bring the world of books closer to you.
          </p>
          <p className="text-gray-700 font-semibold">
            Join us on our journey to spread knowledge and stories across the globe!
          </p>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;
