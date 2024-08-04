// src/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-4 mt-8">
      <div className="container mx-auto text-center">
        <p className="text-sm mb-2">© 2024 Your Company. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mb-2">
          <a href="/about" className="hover:text-gray-400">About</a>
          <a href="/contact" className="hover:text-gray-400">Contact</a>
          <a href="/privacy" className="hover:text-gray-400">Privacy Policy</a>
          <a href="/terms" className="hover:text-gray-400">Terms of Service</a>
        </div>
        <div className="flex justify-center space-x-4">
          <a href="https://facebook.com" className="hover:text-gray-400" aria-label="Facebook">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com" className="hover:text-gray-400" aria-label="Twitter">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://instagram.com" className="hover:text-gray-400" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://linkedin.com" className="hover:text-gray-400" aria-label="LinkedIn">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
