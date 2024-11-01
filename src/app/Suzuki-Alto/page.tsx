import Link from 'next/link';
import React from 'react';

const VehicleDetails = () => {
  return (
    <div className="bg-blue-50 min-h-screen flex justify-center items-center p-6">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl w-full text-center">
        {/* Title */}
        <h1 className="text-3xl font-bold mb-4">
          <span className="font-black">Suzuki Alto 2024 Price in Pakistan, Images, Reviews & Specs</span>
        </h1>

        {/* Image */}
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM2SEFgSwovlw2IenrbnVlVGVkC2-5X5TjPQ&s" 

          alt="Suzuki Alto 2024"
          className="rounded-lg mx-auto mb-4"
        />

        {/* Action Buttons */}
        <div className="flex justify-center space-x-4 my-4">
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Book a test drive</button>
          <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-50">Request Bank Finance</button>
          <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-50">Visit Place</button>
          <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-50">Car Inspection</button>
        </div>

        {/* Vehicle Description */}
        <h2 className="text-2xl font-semibold mt-6 mb-2">Vehicle Description</h2>
        <div className="text-gray-700 text-lg mb-4">
          <p><span className="font-semibold">Number of Doors:</span> 4 <span className="ml-4 font-semibold">Engine:</span> 1800 CC</p>
          <p><span className="font-semibold">Condition:</span> 8.5 / 10 <span className="ml-4 font-semibold">Driven:</span> 9,500 KM</p>
          <p><span className="font-semibold">Suspension Type:</span> Soft Suspension</p>
          <p><span className="font-semibold">Avg:</span> 13 Km per ltr <span className="ml-4 font-semibold">Transmission:</span> Automatic</p>
          <p><span className="font-semibold">Fuel Type:</span> High Octane</p>
        </div>

        {/* Price */}
        <p className="text-3xl font-bold text-green-600">PKR 40,00,000</p>

        {/* Payment Button */}
        

        <Link href="/forms"><button className="bg-blue-600 text-white px-6 py-2 rounded-lg mt-6 hover:bg-blue-700" >Make Payment</button></Link>

      </div>
    </div>
  );
};

export default VehicleDetails;
