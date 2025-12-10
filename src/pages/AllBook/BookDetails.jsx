
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const BookDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();

  
  const [book, setBook] = useState(location.state?.book || null);

 
  useEffect(() => {
    if (!book) {
      fetch(`http://localhost:3000/allBook/${id}`)
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

        <button className="btn btn-primary">Buy Now</button>
        <button onClick={() => navigate(-1)} className="btn btn-outline ml-4">
          Back
        </button>
      </div>
    </div>
  );
};

export default BookDetails;







// import React, { useEffect } from "react";
// import { useLocation, useNavigate, useParams } from "react-router-dom";

// const BookDetails = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const Book = location.state?.book;
//   const { id } = useParams();

//   useEffect(() => {
//     fetch(`http://localhost:3000/allbook/${id}`)
//       .then((res) => res.json())
//       .then((data) => setBooks(data));
//   }, []);
//   console.log(id);

//   if (!Book) {
//     return (
//       <div className="p-10 text-center">
//         No book data available.
//         <button
//           onClick={() => navigate(-1)}
//           className="btn btn-primary mt-4"
//         >
//           Back
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="container mx-auto p-6">
//       <div className="max-w-3xl mx-auto card bg-base-100 shadow-lg p-6 rounded-xl">
//         <img
//           src={Book.image}
//           alt={Book.title}
//           className="w-full h-72 object-cover rounded-lg mb-6"
//         />
//         <h1 className="text-3xl font-bold mb-2">{Book.title}</h1>
//         <p className="text-gray-600 mb-4">by {Book.author}</p>
//         <p className="text-lg mb-4">{Book.description}</p>
//         <p className="text-sm font-medium bg-gray-200 inline-block px-3 py-1 rounded-full mb-4">
//           Category: {Book.category}
//         </p>
//         <h2 className="text-xl font-semibold mb-4">Price: ${Book.price}</h2>
//         <div className="flex gap-4">
//           <button className="btn btn-primary">Buy Now</button>
//           <button
//             onClick={() => navigate(-1)}
//             className="btn btn-outline"
//           >
//             Back
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BookDetails;
