import React, { useState } from "react";
import Swal from "sweetalert2";
import aboutImage from "../../assets/book-12.jpg";

const AboutUs = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // simple validation
    if (!formData.name || !formData.email || !formData.message) {
      return Swal.fire("Error", "Please fill all fields", "error");
    }

    Swal.fire("Success!", "Message sent successfully 🚀", "success");

    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };

  return (
    <>
      {/* ================= ABOUT SECTION ================= */}
      <section className="bg-gradient-to-br from-amber-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          {/* Image */}
          <div className="relative animate-[float_6s_ease-in-out_infinite]">
            <img
              src={aboutImage}
              alt="About BookCourier"
              className="w-full h-[420px] object-cover rounded-3xl shadow-2xl
                         brightness-105 contrast-105
                         transition-transform duration-500 hover:-translate-y-2"
            />
          </div>

          {/* Content */}
          <div className="bg-white/80 backdrop-blur-lg p-10 rounded-3xl shadow-xl
                          transition-all duration-500
                          hover:-translate-y-2
                          animate-[float_7s_ease-in-out_infinite]">

            <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
              About <span className="text-amber-500">BookCourier</span>
            </h2>

            <div className="w-20 h-1 bg-amber-400 mb-6 rounded-full"></div>

            <p className="text-gray-700 leading-relaxed mb-5">
              <strong>BookCourier</strong> is your trusted companion for delivering
              knowledge, stories, and inspiration right to your doorstep.
            </p>

            <p className="text-gray-700 leading-relaxed mb-5">
              Founded in <strong>2022</strong>, we’ve grown into a reliable and
              fast-growing book delivery service.
            </p>

            <p className="text-gray-800 font-semibold text-lg">
              📚 Let’s spread knowledge, one book at a time.
            </p>

            <button className="mt-8 px-6 py-3 bg-amber-500 hover:bg-amber-600
                               text-white rounded-full font-medium transition">
              Learn More
            </button>
          </div>

        </div>

        {/* Animation */}
        <style>
          {`
            @keyframes float {
              0% { transform: translateY(0px); }
              50% { transform: translateY(-8px); }
              100% { transform: translateY(0px); }
            }
          `}
        </style>
      </section>


      {/* ================= CONTACT SECTION ================= */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-4xl font-bold mb-3">
            Contact <span className="text-green-500">Us</span>
          </h2>
          <p className="text-gray-600">
            Have questions or feedback? Send us a message!
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="max-w-3xl mx-auto bg-gray-100 p-8 rounded-2xl shadow space-y-5"
        >

          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="input input-bordered w-full"
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="input input-bordered w-full"
          />

          {/* Message */}
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="textarea textarea-bordered w-full h-32"
          ></textarea>

          {/* Button */}
          <button className="btn btn-success w-full">
            Send Message
          </button>

        </form>
      </section>
    </>
  );
};

export default AboutUs;