import React, { useState } from 'react';
import Swal from 'sweetalert2';

const ManageBooks = () => {
    const [editingBook, setEditingBook] = useState(null);
    const [addBookOpen, setAddBookOpen] = useState(false);

    // Books state
    const [books, setBooks] = useState([
        { id: 1, name: "Clean Code", author: "Robert C. Martin", price: 35 }
    ]);

    // DELETE
    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "এই বইটা delete হয়ে যাবে!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                setBooks(books.filter(book => book.id !== id));
                Swal.fire("Deleted!", "Book successfully deleted.", "success");
            }
        });
    };

    // EDIT SUBMIT
    const handleUpdate = (e) => {
        e.preventDefault();
        const form = e.target;
        const updatedBook = {
            ...editingBook,
            name: form.name.value,
            author: form.author.value,
            price: parseFloat(form.price.value)
        };
        setBooks(books.map(book => book.id === editingBook.id ? updatedBook : book));
        Swal.fire("Updated!", "Book successfully updated.", "success");
        setEditingBook(null);
    };

    // ADD NEW BOOK
    const handleAddBook = (e) => {
        e.preventDefault();
        const form = e.target;
        const newBook = {
            id: Date.now(), // simple id
            name: form.name.value,
            author: form.author.value,
            price: parseFloat(form.price.value)
        };
        setBooks([...books, newBook]);
        Swal.fire("Added!", "New book successfully added.", "success");
        setAddBookOpen(false);
    };

    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Manage Books</h2>
                <button 
                    className="btn btn-primary"
                    onClick={() => setAddBookOpen(true)}
                >
                    Add Book
                </button>
            </div>

            <table className="table w-full">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Book</th>
                        <th>Author</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((book, index) => (
                        <tr key={book.id}>
                            <td>{index + 1}</td>
                            <td>{book.name}</td>
                            <td>{book.author}</td>
                            <td>${book.price}</td>
                            <td className="space-x-2">
                                <button
                                    onClick={() => setEditingBook(book)}
                                    className="btn btn-sm btn-warning"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => handleDelete(book.id)}
                                    className="btn btn-sm btn-error"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* EDIT MODAL */}
            {editingBook && (
                <dialog open className="modal">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg mb-4">Edit Book</h3>
                        <form onSubmit={handleUpdate} className="space-y-3">
                            <input
                                name="name"
                                defaultValue={editingBook.name}
                                className="input input-bordered w-full"
                                placeholder="Book Name"
                                required
                            />
                            <input
                                name="author"
                                defaultValue={editingBook.author}
                                className="input input-bordered w-full"
                                placeholder="Author"
                                required
                            />
                            <input
                                name="price"
                                defaultValue={editingBook.price}
                                className="input input-bordered w-full"
                                placeholder="Price"
                                type="number"
                                required
                            />
                            <div className="modal-action">
                                <button type="submit" className="btn btn-success">Update</button>
                                <button type="button" onClick={() => setEditingBook(null)} className="btn">Cancel</button>
                            </div>
                        </form>
                    </div>
                </dialog>
            )}

            {/* ADD BOOK MODAL */}
            {addBookOpen && (
                <dialog open className="modal">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg mb-4">Add New Book</h3>
                        <form onSubmit={handleAddBook} className="space-y-3">
                            <input
                                name="name"
                                className="input input-bordered w-full"
                                placeholder="Book Name"
                                required
                            />
                            <input
                                name="author"
                                className="input input-bordered w-full"
                                placeholder="Author"
                                required
                            />
                            <input
                                name="price"
                                className="input input-bordered w-full"
                                placeholder="Price"
                                type="number"
                                required
                            />
                            <div className="modal-action">
                                <button type="submit" className="btn btn-success">Add</button>
                                <button type="button" onClick={() => setAddBookOpen(false)} className="btn">Cancel</button>
                            </div>
                        </form>
                    </div>
                </dialog>
            )}
        </div>
    );
};

export default ManageBooks;
