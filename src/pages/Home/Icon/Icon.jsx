import React from 'react';

import { FaRegCalendarCheck, FaBoxOpen, FaTruck, FaShippingFast } from "react-icons/fa";


const Icon = () => {
    return (
        <div>
            <div className="w-full py-16">
                <h2 className="text-3xl font-bold text-center mb-12">
                    Our Working Process
                </h2>

                <div className="relative flex items-center justify-between w-full max-w-5xl mx-auto">
                    {/* Horizontal Line */}
                    <div className="absolute top-1/2 left-0 right-0 h-2 bg-gray-300 -z-10"></div>

                    {/* Step 1 */}
                    <div className="flex flex-col items-center">
                        <div className="w-28 h-28 border border-black rounded-full flex items-center justify-center bg-white text-3xl">
                            <FaRegCalendarCheck />
                        </div>
                        <p className="mt-2 font-semibold">Booking</p>
                    </div>

                    {/* Step 2 */}
                    <div className="flex flex-col items-center">
                        <div className="w-28 h-28 border border-black rounded-full flex items-center justify-center bg-white text-3xl">
                            <FaBoxOpen />
                        </div>
                        <p className="mt-2 font-semibold">Packing</p>
                    </div>

                    {/* Step 3 */}
                    <div className="flex flex-col items-center">
                        <div className="w-28 h-28 border border-black rounded-full flex items-center justify-center bg-white text-3xl">
                            <FaTruck />
                        </div>
                        <p className="mt-2 font-semibold">Transportation</p>
                    </div>

                    {/* Step 4 */}
                    <div className="flex flex-col items-center">
                        <div className="w-28 h-28 border border-black rounded-full flex items-center justify-center bg-white text-3xl">
                            <FaShippingFast />
                        </div>
                        <p className="mt-2 font-semibold">Delivery</p>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Icon;