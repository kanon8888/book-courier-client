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
                className="relative inline-flex items-center justify-center w-full px-4 py-2 overflow-hidden font-medium transition-all bg-green-500 rounded-lg shadow text-white group hover:bg-green-600 hover:shadow-lg"
              >
                <span className="w-28 h-28 rounded rotate-[-40deg] bg-green-700 absolute bottom-0 left-0 -translate-x-full translate-y-full mb-6 ml-6 ease-out duration-500 transition-all group-hover:ml-0 group-hover:mb-20 group-hover:translate-x-0"></span>
                <span className="relative text-white transition-colors duration-300 text-sm">
                  Order This Book
                </span>
              </button>

            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyBooks;
