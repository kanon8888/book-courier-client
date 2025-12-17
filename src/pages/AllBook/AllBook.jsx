import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function AllBook() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/allbook`)
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="font-semibold mb-6 text-center text-fuchsia-600 text-3xl">All Books</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {books.map((book) => (
          <article
            key={book._id}
            className="card bg-base-100 shadow-md rounded-xl overflow-hidden flex flex-col"
          >

            {book.image ? (
              <figure className="w-full h-48 overflow-hidden">
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-full object-cover"
                />
              </figure>
            ) : (
              <div className="w-full h-48 bg-gray-100 flex items-center justify-center">
                <span className="text-gray-400">No image</span>
              </div>
            )}


            <div className="card-body p-4 flex-1 flex flex-col">
              <div>
                <h2 className="text-lg font-semibold line-clamp-2">{book.title}</h2>
                <p className="text-sm text-gray-600">by {book.author}</p>
              </div>

              <p className="text-sm text-gray-700 mt-2 line-clamp-3">
                {book.description}
              </p>

              <div className="mt-3 flex items-center justify-between">
                <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full">
                  {book.category}
                </span>

                <p className="text-sm font-medium">${book.price}</p>
              </div>


              <div className="card-actions mt-4 flex gap-2">

                <Link
                  to={`/allBook/${book._id}`}
                  className="btn btn-outline btn-sm w-1/2"
                >
                  View
                </Link>

                <Link
                to={`send-book`}
                  className="btn btn-primary btn-sm w-1/2">
                  Buy
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
