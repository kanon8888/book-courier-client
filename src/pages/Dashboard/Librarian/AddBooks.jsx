import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
  const navigate = useNavigate();

  const [bookData, setBookData] = useState({
    name: "",
    author: "",
    price: "",
    status: "published",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "image") {
      setBookData({ ...bookData, image: files[0] });
    } else {
      setBookData({ ...bookData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    const oldBooks = JSON.parse(localStorage.getItem("myBooks")) || [];


    const newBook = {
      id: Date.now(),
      name: bookData.name,
      author: bookData.author,
      price: bookData.price,
      status: bookData.status,
      image: URL.createObjectURL(bookData.image),
    };


    oldBooks.push(newBook);


    localStorage.setItem("myBooks", JSON.stringify(oldBooks));


    navigate("/dashboard/librarian/my-books");
  };

  return (
    <div className="max-w-xl mx-auto p-6 rounded-lg shadow-md bg-indigo-300 text-white">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Add New Book</h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="name"
          placeholder="Book Name"
          value={bookData.name}
          onChange={handleChange}
          className="p-2 border rounded"
          required
        />

        <input
          type="text"
          name="author"
          placeholder="Author Name"
          value={bookData.author}
          onChange={handleChange}
          className="p-2 border rounded"
          required
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          value={bookData.price}
          onChange={handleChange}
          className="p-2 border rounded"
          required
        />

        <select
          name="status"
          value={bookData.status}
          onChange={handleChange}
          className="p-2 border rounded"
        >
          <option value="published">Published</option>
          <option value="unpublished">Unpublished</option>
        </select>

        <input
          type="file"
          name="image"
          onChange={handleChange}
          className="p-2 border rounded"
          required
        />

        <button
          type="submit"
          className="relative inline-flex items-center justify-center w-full px-4 py-2 overflow-hidden font-medium transition-all bg-indigo-600 rounded-lg shadow text-white group hover:shadow-lg"
        >
          <span className="w-28 h-28 rounded rotate-[-40deg] bg-indigo-800 absolute bottom-0 left-0 -translate-x-full translate-y-full mb-6 ml-6 ease-out duration-500 transition-all group-hover:ml-0 group-hover:mb-20 group-hover:translate-x-0"></span>
          <span className="relative text-white transition-colors duration-300 text-sm">
            Add Book
          </span>
        </button>
      </form>
    </div>
  );
};

export default AddBook;



