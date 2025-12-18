import React, { useEffect, useState } from "react";

const MyBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const storedBooks = JSON.parse(localStorage.getItem("myBooks")) || [];
    setBooks(storedBooks);
  }, []);

  const handleOrder = (book) => {
    // আগের orders নাও
    const oldOrders = JSON.parse(localStorage.getItem("myOrders")) || [];

    // নতুন order
    const newOrder = {
      orderId: Date.now(),
      bookId: book.id,
      name: book.name,
      author: book.author,
      price: book.price,
      image: book.image,
      status: "pending",
      orderDate: new Date().toISOString(),
    };

    // add order
    oldOrders.push(newOrder);
    localStorage.setItem("myOrders", JSON.stringify(oldOrders));

    // success message
    alert("✅ Order Successful!");
  };

  return (
    <div className="p-6 bg-pink-200">
      <h2 className="text-2xl font-bold mb-4 text-center text-primary">
        My Books
      </h2>

      {books.length === 0 ? (
        <p className="text-center">No books added yet</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {books.map((book) => (
            <div
              key={book.id}
              className="border rounded p-4 shadow-md bg-white"
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

              {/* Order Button */}
              <button
                onClick={() => handleOrder(book)}
                className="mt-3 w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
              >
                Order This Book
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyBooks;
