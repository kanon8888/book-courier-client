import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function AllBook() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch(`https://book-courier-server-bay.vercel.app/allbook`)
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="font-semibold mb-6 text-center text-fuchsia-600 text-3xl">
        All Books
      </h1>

      {/* Grid: 1/2/3/4 columns responsive */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {books.map((book) => (
          <article
            key={book._id}
            className="card bg-white shadow-lg rounded-2xl overflow-hidden flex flex-col transform transition-transform duration-300 hover:scale-105"
          >
            {/* Book Image */}
            {book.image ? (
              <figure className="w-full h-48 overflow-hidden">
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </figure>
            ) : (
              <div className="w-full h-48 bg-gray-100 flex items-center justify-center">
                <span className="text-gray-400">No image</span>
              </div>
            )}

            {/* Card Body */}
            <div className="card-body p-4 flex-1 flex flex-col">
              {/* Title & Author */}
              <div>
                <h2 className="text-lg font-semibold line-clamp-2 text-gray-800">
                  {book.title}
                </h2>
                <p className="text-sm text-gray-500">by {book.author}</p>
              </div>

              {/* Description */}
              <p className="text-sm text-gray-600 mt-2 line-clamp-3">
                {book.description}
              </p>

              {/* Category & Price */}
              <div className="mt-3 flex items-center justify-between">
                <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full">
                  {book.category}
                </span>

                <p className="text-sm font-medium text-gray-800">
                  ${book.price}
                </p>
              </div>

              {/* Buttons */}
              <div className="card-actions mt-4 flex gap-2">
                {/* View Button */}
                <Link
                  to={`/allBook/${book._id}`}
                  className="relative inline-flex items-center justify-center px-4 py-2 w-1/2 overflow-hidden font-medium transition-all bg-white rounded-lg shadow group hover:shadow-lg"
                >
                  <span className="w-28 h-28 rounded rotate-[-40deg] bg-green-500 absolute bottom-0 left-0 -translate-x-full translate-y-full mb-6 ml-6 ease-out duration-500 transition-all group-hover:ml-0 group-hover:mb-20 group-hover:translate-x-0"></span>

                  <span className="relative text-black transition-colors duration-300 group-hover:text-white text-sm">
                    View
                  </span>
                </Link>

                {/* Buy Button */}
                <Link
                  to="send-book"
                  className="relative inline-flex items-center justify-center px-4 py-2 w-1/2 overflow-hidden font-medium transition-all bg-green-600 rounded-lg shadow text-white group hover:shadow-lg"
                >
                  <span className="w-28 h-28 rounded rotate-[-40deg] bg-green-800 absolute bottom-0 left-0 -translate-x-full translate-y-full mb-6 ml-6 ease-out duration-500 transition-all group-hover:ml-0 group-hover:mb-20 group-hover:translate-x-0"></span>

                  <span className="relative text-white transition-colors duration-300 text-sm">
                    Buy
                  </span>
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
