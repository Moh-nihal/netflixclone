// src/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';


export default function NavBar() {
  return (
    <nav className="fixed top-0 w-full h-20 flex items-center font-bold bg-black text-white px-4 z-10">
      <div className="flex-1">
        <Link to="/">
          <img src="data:image/png;base64,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" alt="Netflix Logo" className="h-20" /> {/* Adjust the height as needed */}
        </Link>
      </div>
      <div className="flex-1 flex justify-center gap-4">
        <Link to="/movies" className="hover:text-red-600 cursor-pointer">Movies</Link>
        <Link to="/web-series" className="hover:text-red-600 cursor-pointer">Web-Series</Link>
        <Link to="/tv" className="hover:text-red-600 cursor-pointer">TV</Link>
        <Link to="/songs" className="hover:text-red-600 cursor-pointer">Songs</Link>
        <Link to="/adult" className="hover:text-red-600 cursor-pointer">Adult</Link>
      </div>
      <div className="flex-1 flex justify-end">
        <i className="fa-solid fa-magnifying-glass hover:text-gray-400 cursor-pointer" aria-label="Search"></i>
      </div>
    </nav>
  );
}
