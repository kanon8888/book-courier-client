import React from 'react';
import { Link } from 'react-router-dom';
import errorImg from '../../assets/App-Error.png'; 

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4 text-center">
      
      {/* Error Image */}
      <img
        src={errorImg}
        alt="404 Not Found"
        className="w-64 md:w-96 mb-6"
      />

      {/* Error Text */}
      <h1 className="text-6xl md:text-7xl font-extrabold text-blue-600">404</h1>
      <h2 className="text-2xl md:text-3xl font-bold mt-2">Page Not Found</h2>
      <p className="mt-2 text-gray-600">
        Oops! The page you are looking for does not exist.
      </p>

      {/* Home Button */}
      <Link
        to="/"
        className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
      >
        Go to Home
      </Link>
    </div>
  );
};

export default Error;