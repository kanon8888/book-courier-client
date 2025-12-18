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

                <button type="submit" className="btn btn-primary w-full">
                    Add Book
                </button>
            </form>
        </div>
    );
};

export default AddBook;
