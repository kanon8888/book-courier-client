import React from "react";
import { FaChartLine, FaGlobe, FaClock } from "react-icons/fa";

const Features = () => {
    return (
        <div className="bg-gray-100 py-16 px-4">
            <div className="max-w-6xl mx-auto text-center">

                {/* Title */}
                <h2 className="text-3xl md:text-4xl font-bold mb-12">
                    Why Choose Our Book Courier
                </h2>

                {/* Grid */}
                <div className="grid md:grid-cols-3 gap-10">

                    {/* Item 1 */}
                    <div className="text-center p-6 hover:shadow-lg rounded-lg transition">
                        <FaChartLine className="text-5xl mx-auto text-green-500 mb-4" />
                        <h3 className="text-xl font-bold mb-3">
                            Smart Technology
                        </h3>
                        <p className="text-gray-600">
                            Our system ensures smooth booking, tracking, and delivery for all your books.
                        </p>
                    </div>

                    {/* Item 2 */}
                    <div className="text-center p-6 hover:shadow-lg rounded-lg transition">
                        <FaGlobe className="text-5xl mx-auto text-green-500 mb-4" />
                        <h3 className="text-xl font-bold mb-3">
                            Nationwide Coverage
                        </h3>
                        <p className="text-gray-600">
                            We deliver books across all districts with fast and reliable service.
                        </p>
                    </div>

                    {/* Item 3 */}
                    <div className="text-center p-6 hover:shadow-lg rounded-lg transition">
                        <FaClock className="text-5xl mx-auto text-green-500 mb-4" />
                        <h3 className="text-xl font-bold mb-3">
                            Fastest Delivery
                        </h3>
                        <p className="text-gray-600">
                            Our team ensures quick delivery so your books arrive on time.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Features;