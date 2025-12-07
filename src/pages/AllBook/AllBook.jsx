import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllBooks = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/books")
            .then(res => res.json())
            .then(data => setBooks(data));
    }, []);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
            {books.map(book => (
                <div key={book._id} className="card bg-base-100 shadow-xl">
                    <figure>
                        <img src={book.image} alt={book.title} className="h-60 w-full object-cover" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{book.title}</h2>
                        <p>Author: {book.author}</p>
                        <p className="font-bold text-lg">Price: ${book.price}</p>

                        <Link to={`/books/${book._id}`} className="btn btn-primary w-full">
                            View Details
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AllBooks;
