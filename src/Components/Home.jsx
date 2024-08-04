/* eslint-disable no-unused-vars */
// src/HomePage.js
import React from 'react';

const HomePage = () => {
  // Generate an array with both .jpeg and .jpg file URLs
  const images = [...Array(48)].flatMap((_, index) => [
    `/images/image${index + 1}.jpeg`
  ]);
  const images2 = [...Array(48)].flatMap((_, index) => [
    `/images2/image${index + 1}.jpg`
  ]);
  const images3 = [...Array(12)].flatMap((_, index) => [
    `/images3/image${index + 1}.jpg`
  ]);
  const images4 = [...Array(48)].flatMap((_, index) => [
    `/images4/image${index + 1}.jpg`
  ]);

  return (
    <div className="flex flex-col items-center justify-center p-4 mt-16">
       
        <h1 className='mr-[1000px] font-bold text-gray-300 text-2xl ' >Recent Uploaded...</h1>
        
        <div className="overflow-x-scroll whitespace-nowrap scrollbar-hide">
        {images.map((src, index) => (
          <div
            key={index}
            className="inline-block border border-gray-300 overflow-hidden transform transition-transform duration-300 hover:scale-125 m-2"
          >
            <img
              src={src}
              alt={`Image ${index + 1}`}
              className="object-cover  w-48"
            />
          </div>
        ))}
         </div>
      <h1 className='mr-[1050px] font-bold text-gray-300 text-2xl ' >Web-series...</h1>
      <div className="overflow-x-scroll whitespace-nowrap scrollbar-hide">
        {images2.map((src, index) => (
          <div
            key={index}
            className="inline-block border border-gray-300 overflow-hidden transform transition-transform duration-300 hover:scale-125 m-2"
          >
            <img
              src={src}
              alt={`Image ${index + 1}`}
              className="object-cover  w-48"
            />
          </div>
        ))}
      </div>
      <h1 className='mr-[1050px] font-bold text-gray-300 text-2xl ' >Tv Shows...</h1>
        
        <div className="overflow-x-scroll whitespace-nowrap scrollbar-hide">
        {images3.map((src, index) => (
          <div
            key={index}
            className="inline-block border border-gray-300 overflow-hidden transform transition-transform duration-300 hover:scale-125 m-2"
          >
            <img
              src={src}
              alt={`Image ${index + 1}`}
              className="object-cover  w-48"
            />
          </div>
        ))}
         </div>
         <h1 className='mr-[1100px] font-bold text-gray-300 text-2xl ' >Songs...</h1>
        
        <div className="overflow-x-scroll whitespace-nowrap scrollbar-hide">
        {images4.map((src, index) => (
          <div
            key={index}
            className="inline-block border border-gray-300 overflow-hidden transform transition-transform duration-300 hover:scale-125 m-2"
          >
            <img
              src={src}
              alt={`Image ${index + 1}`}
              className="object-cover  w-48"
            />
          </div>
        ))}
         </div>

    </div>
  );
};

export default HomePage;
