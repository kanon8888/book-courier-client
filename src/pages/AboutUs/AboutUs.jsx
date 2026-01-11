import React from "react";
import aboutImage from "../../assets/book-12.jpg";

const AboutUs = () => {
  return (
    <section className="bg-gradient-to-br from-amber-50 to-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Image Section */}
        <div className="relative animate-[float_6s_ease-in-out_infinite]">
          <img
            src={aboutImage}
            alt="About BookCourier"
            className="w-full h-[420px] object-cover rounded-3xl shadow-2xl
                       brightness-105 contrast-105
                       transition-transform duration-500 hover:-translate-y-2"
          />
        </div>

        {/* Content Section */}
        <div className="bg-white/80 backdrop-blur-lg p-10 rounded-3xl shadow-xl
                        transition-all duration-500
                        hover:-translate-y-2
                        animate-[float_7s_ease-in-out_infinite]">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
            About <span className="text-amber-500">BookCourier</span>
          </h2>

          <div className="w-20 h-1 bg-amber-400 mb-6 rounded-full"></div>

          <p className="text-gray-700 leading-relaxed mb-5">
            <strong>BookCourier</strong> is your trusted companion for delivering
            knowledge, stories, and inspiration right to your doorstep.
          </p>

          <p className="text-gray-700 leading-relaxed mb-5">
            Founded in <strong>2022</strong>, we’ve grown into a reliable and
            fast-growing book delivery service.
          </p>

          <p className="text-gray-800 font-semibold text-lg">
            📚 Let’s spread knowledge, one book at a time.
          </p>

          <button className="mt-8 px-6 py-3 bg-amber-500 hover:bg-amber-600
                             text-white rounded-full font-medium transition">
            Learn More
          </button>
        </div>

      </div>

      {/* Custom Animation */}
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-8px); }
            100% { transform: translateY(0px); }
          }
        `}
      </style>
    </section>
  );
};

export default AboutUs;
