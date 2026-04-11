import React from "react";
import { FaBook, FaShieldAlt, FaMapMarkerAlt } from "react-icons/fa";
import delivery from "../../../assets/delivery.jpg";

const DeliverySection = () => {
    return (
        <div className="bg-gray-100 py-12 px-4 md:px-10">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

                {/* LEFT IMAGE */}
                <div>
                    <img
                        src={delivery}
                        alt="book delivery"
                        className="rounded-lg w-full shadow-md"
                    />
                </div>

                {/* RIGHT CONTENT */}
                <div>
                    <p className="text-gray-600 text-lg mb-2">
                        Your Trusted Book Courier
                    </p>

                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        Fast. Safe. Book Delivery.
                    </h1>

                    {/* Item 1 */}
                    <div className="flex gap-4 mb-6 items-start">
                        <FaBook className="text-green-500 text-3xl mt-1" />
                        <div>
                            <h3 className="font-bold text-lg">Affordable Delivery</h3>
                            <p className="text-gray-600">
                                We deliver books at low cost with clear and transparent pricing.
                            </p>
                        </div>
                    </div>

                    {/* Item 2 */}
                    <div className="flex gap-4 mb-6 items-start">
                        <FaShieldAlt className="text-green-500 text-3xl mt-1" />
                        <div>
                            <h3 className="font-bold text-lg">Secure Book Handling</h3>
                            <p className="text-gray-600">
                                Your books are handled carefully and delivered safely to your doorstep.
                            </p>
                        </div>
                    </div>

                    {/* Item 3 */}
                    <div className="flex gap-4 items-start">
                        <FaMapMarkerAlt className="text-green-500 text-3xl mt-1" />
                        <div>
                            <h3 className="font-bold text-lg">Track Your Books</h3>
                            <p className="text-gray-600">
                                Track your book delivery in real-time anytime, anywhere.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default DeliverySection;