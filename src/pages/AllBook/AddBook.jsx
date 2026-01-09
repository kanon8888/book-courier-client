import React, { useState } from "react";

const AddBook = () => {
    const [formData, setFormData] = useState({
        title: "",
        author: "",
        price: "",
        category: "",
        image: "",
        description: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch("https://book-courier-server-bay.vercel.app/allBook", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        })
            .then((res) => res.json())
            .then((data) => {
                alert("Book Added Successfully!");
                console.log(data);
            })
            .catch((err) => console.log(err));
    };

    return (
        <div className="p-10 max-w-xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Add New Book</h1>

            <form onSubmit={handleSubmit} className="space-y-4">

                <input
                    type="text"
                    name="title"
                    placeholder="Book Title"
                    className="input input-bordered w-full"
                    onChange={handleChange}
                    required
                />

                <input
                    type="text"
                    name="author"
                    placeholder="Author Name"
                    className="input input-bordered w-full"
                    onChange={handleChange}
                    required
                />

                <input
                    type="number"
                    name="price"
                    placeholder="Price"
                    className="input input-bordered w-full"
                    onChange={handleChange}
                    required
                />

                <input
                    type="text"
                    name="category"
                    placeholder="Category"
                    className="input input-bordered w-full"
                    onChange={handleChange}
                    required
                />

                <input
                    type="text"
                    name="image"
                    placeholder="Image URL"
                    className="input input-bordered w-full"
                    onChange={handleChange}
                    required
                />

                <textarea
                    name="description"
                    placeholder="Description"
                    className="textarea textarea-bordered w-full"
                    onChange={handleChange}
                    required
                ></textarea>

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
