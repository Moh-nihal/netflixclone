// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Movies from './Components/Movies';
import WebSeries from './Components/WebSeries';
import TV from './Components/TV';
import Songs from './Components/Songs';
import Adult from './Components/Adult';
import Home from './Components/Home'; // Assume Home is a component representing the home page
import Footer from './Components/Footer';

const App = () => {
  return (
    <Router>
      <NavBar />
      <div className="pt-20"> {/* Add padding to the top to prevent content from being hidden */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/web-series" element={<WebSeries />} />
          <Route path="/tv" element={<TV />} />
          <Route path="/songs" element={<Songs />} />
          <Route path="/adult" element={<Adult />} />
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
};

export default App;

