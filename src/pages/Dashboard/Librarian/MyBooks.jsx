import React, { useEffect, useState } from "react";

const MyBooks = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const storedBooks = JSON.parse(localStorage.getItem("myBooks")) || [];
        setBooks(storedBooks);
    }, []);

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">My Books</h2>

            {books.length === 0 ? (
                <p>No books added yet</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {books.map((book) => (
                        <div
                            key={book.id}
                            className="border rounded p-4 shadow-md"
                        >
                            <img
                                src={book.image}
                                alt={book.name}
                                className="h-40 w-full object-cover mb-2 rounded"
                            />
                            <h3 className="font-bold">{book.name}</h3>
                            <p>Author: {book.author}</p>
                            <p>Price: {book.price}</p>
                            <p>Status: {book.status}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MyBooks;
