import React, { useState } from "react";
import Swal from "sweetalert2";
import UseAxiosSecure from "../../../hooks/UseAxiosSecure";
import axios from "axios";

const AddBooks = () => {
  const axiosSecure = UseAxiosSecure();
  const imgbbKey = import.meta.env.VITE_IMGBB_KEY;

  const [loading, setLoading] = useState(false);
  const [imageFile, setImageFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const title = form.title.value;
    const author = form.author.value;
    const price = form.price.value;
    const category = form.category.value;

    if (!imageFile) {
      return Swal.fire("Error", "Please select an image", "error");
    }

    try {
      setLoading(true);

      // 1️⃣ Upload image to imgbb
      const imageData = new FormData();
      imageData.append("image", imageFile);

      const imgRes = await axios.post(
        `https://api.imgbb.com/1/upload?key=${imgbbKey}`,
        imageData
      );

      const image = imgRes.data.data.url;

      // 2️⃣ Save book to DB
      const book = {
        title,
        author,
        price,
        category,
        image,
      };

      await axiosSecure.post("/books", book);

      Swal.fire("Success!", "Book added successfully", "success");
      form.reset();
      setImageFile(null);
    } catch (error) {
      console.error(error);
      Swal.fire("Error!", "Failed to add book", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Add New Book</h2>

      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          name="title"
          className="input input-bordered w-full"
          placeholder="Book Title"
          required
        />

        <input
          name="author"
          className="input input-bordered w-full"
          placeholder="Author Name"
          required
        />

        <input
          name="price"
          type="number"
          className="input input-bordered w-full"
          placeholder="Price"
          required
        />

        <input
          name="category"
          className="input input-bordered w-full"
          placeholder="Category"
          required
        />

        {/* FILE INPUT */}
        <input
          type="file"
          accept="image/*"
          className="file-input file-input-bordered w-full"
          onChange={(e) => setImageFile(e.target.files[0])}
          required
        />

        <button disabled={loading} className="btn btn-success w-full">
          {loading ? "Uploading..." : "Add Book"}
        </button>
      </form>
    </div>
  );
};

export default AddBooks;
