
import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const BookDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();


  const [book, setBook] = useState(location.state?.book || null);


  useEffect(() => {
    if (!book) {
      fetch(`https://book-courier-server-bay.vercel.app/allBook/${id}`)
        .then((res) => res.json())
        .then((data) => setBook(data))
        .catch((err) => console.log(err));
    }
  }, [id, book]);

  if (!book) {
    return (
      <div className="p-10 text-center">
        Loading book details...
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <div className="max-w-3xl mx-auto card bg-base-100 shadow-lg p-6 rounded-xl">

        <img
          src={book.image}
          alt={book.title}
          className="w-full h-72 object-cover rounded-lg mb-6"
        />

        <h1 className="text-3xl font-bold mb-2">{book.title}</h1>
        <p className="text-gray-600 mb-4">by {book.author}</p>
        <p className="text-lg mb-4">{book.description}</p>

        <p className="text-sm font-medium bg-gray-200 inline-block px-3 py-1 rounded-full mb-4">
          Category: {book.category}
        </p>

        <h2 className="text-xl font-semibold mb-4">
          Price: ${book.price}
        </h2>


        <Link to={`/send-book/${book._id}`} className="relative inline-flex items-center justify-center px-6 py-2 overflow-hidden font-medium transition-all bg-green-600 rounded-lg shadow text-white group hover:shadow-lg">
          <span className="w-28 h-28 rounded rotate-[-40deg] bg-green-800 absolute bottom-0 left-0 -translate-x-full translate-y-full mb-6 ml-6 ease-out duration-500 transition-all group-hover:ml-0 group-hover:mb-20 group-hover:translate-x-0"></span>
          <span className="relative text-white transition-colors duration-300 text-sm">Buy Now</span>
        </Link>
        <button
          onClick={() => navigate(-1)}
          className="relative inline-flex items-center justify-center px-6 py-2 overflow-hidden font-medium transition-all bg-white border border-gray-300 rounded-lg shadow text-gray-800 group hover:shadow-lg hover:bg-gray-100"
        >
          <span className="relative text-gray-800 transition-colors duration-300 text-sm">Back</span>
        </button>
      </div>
    </div>
  );
};

export default BookDetails;






