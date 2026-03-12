// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import NavBar from './Components/NavBar';
import Movies from './Components/Movies';
import WebSeries from './Components/WebSeries';
import TV from './Components/TV';
import Songs from './Components/Songs';
import Adult from './Components/Adult';
import Home from './Components/Home'; // Cinematic premium homepage
import MovieDetail from './Components/MovieDetail';
import Footer from './Components/Footer';

const PageTransitionWrapper = ({ children }) => {
  return (
    <motion.main
      className="min-h-screen pt-20 pb-10 px-4 md:px-10 lg:px-16"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.35, ease: [0.22, 0.61, 0.36, 1] }}
    >
      {children}
    </motion.main>
  );
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransitionWrapper>
              <Home />
            </PageTransitionWrapper>
          }
        />
        <Route
          path="/movies"
          element={
            <PageTransitionWrapper>
              <Movies />
            </PageTransitionWrapper>
          }
        />
        <Route
          path="/web-series"
          element={
            <PageTransitionWrapper>
              <WebSeries />
            </PageTransitionWrapper>
          }
        />
        <Route
          path="/tv"
          element={
            <PageTransitionWrapper>
              <TV />
            </PageTransitionWrapper>
          }
        />
        <Route
          path="/songs"
          element={
            <PageTransitionWrapper>
              <Songs />
            </PageTransitionWrapper>
          }
        />
        <Route
          path="/adult"
          element={
            <PageTransitionWrapper>
              <Adult />
            </PageTransitionWrapper>
          }
        />
        <Route
          path="/title/:id"
          element={
            <PageTransitionWrapper>
              <MovieDetail />
            </PageTransitionWrapper>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  return (
    <Router>
      <div className="relative min-h-screen text-slate-50">
        <NavBar />
        <AnimatedRoutes />
        <Footer />
      </div>
    </Router>
  );
};

export default App;

