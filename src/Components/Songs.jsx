
import React from 'react';

const Songs = () => {
  const images = [...Array(48)].map((_, index) => `/images4/image${index + 1}.jpg`);

  return (
    <div className="flex flex-col items-center justify-center p-4 mt-16">
      <div className="grid grid-cols-5 gap-4">
        {images.map((src, index) => (
          <div
            key={index}
            className="border border-gray-300 overflow-hidden transform transition-transform duration-300 hover:scale-125"
          >
            <img
              src={src}
              alt={`Image ${index + 1}`}
              className="object-cover h-full w-full"
            />
          </div>
        ))}
      </div>
      <div className="flex mt-4 space-x-2">
        <button className="px-4 py-2 rounded bg-gray-700 text-white">1</button>
        <button className="px-4 py-2 rounded bg-gray-700 text-white">2</button>
        <button className="px-4 py-2 rounded bg-gray-700 text-white">3</button>
        {/* Add more buttons as needed */}
      </div>
    </div>
  );
};

export default Songs;