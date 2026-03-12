// src/NavBar.js
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [query, setQuery] = useState('');
  const [openProfile, setOpenProfile] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setShowSearch(false);
    setOpenProfile(false);
  }, [location.pathname]);

  const navItems = [
    { to: '/movies', label: 'Movies' },
    { to: '/web-series', label: 'Web Series' },
    { to: '/tv', label: 'TV' },
    { to: '/songs', label: 'Music' },
    { to: '/adult', label: 'Adults' },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-30">
      <motion.nav
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={`mx-auto flex h-16 items-center px-4 md:h-20 md:px-8 lg:px-12 ${
          isScrolled ? 'mt-0' : 'mt-2 md:mt-4'
        }`}
      >
        <div
          className={`flex w-full items-center gap-4 rounded-2xl border border-white/10 bg-gradient-to-r from-black/75 via-black/50 to-black/30 px-4 py-2.5 text-sm text-slate-100 shadow-[0_18px_45px_rgba(15,23,42,0.85)] backdrop-blur-2xl`}
        >
          {/* Brand */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-accent-violet via-slate-900 to-accent-cyan shadow-glow-accent">
              <span className="absolute inset-0 rounded-xl bg-[radial-gradient(circle_at_10%_0,rgba(248,250,252,0.75),transparent_55%)] opacity-60" />
              <span className="relative text-[0.9rem] font-semibold tracking-[0.22em] uppercase">
                NX
              </span>
            </div>
            <div className="hidden flex-col leading-tight sm:flex">
              <span className="text-[0.75rem] font-semibold uppercase tracking-[0.28em] text-slate-200/90">
                NovaX
              </span>
              <span className="text-[0.7rem] text-slate-400">
                Premium cinematic streaming
              </span>
            </div>
          </Link>

          {/* Nav links */}
          <div className="flex-1 hidden items-center justify-center gap-1.5 md:flex">
            {navItems.map((item) => {
              const active = location.pathname === item.to;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`relative rounded-full px-3 py-1.5 text-xs font-medium tracking-wide transition-colors ${
                    active
                      ? 'text-slate-50'
                      : 'text-slate-300/80 hover:text-slate-100'
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-white/10 ring-1 ring-white/20 backdrop-blur-xl"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </Link>
              );
            })}
          </div>

          {/* Right cluster: search + profile */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Search */}
            <div className="relative flex items-center">
              <motion.div
                animate={{
                  width: showSearch ? 180 : 34,
                }}
                transition={{ duration: 0.25 }}
                className="flex h-9 items-center overflow-hidden rounded-full border border-white/15 bg-night-elevated/80 px-2 text-xs text-slate-100 backdrop-blur-xl"
              >
                <button
                  onClick={() => setShowSearch((v) => !v)}
                  className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-[0.8rem]"
                  aria-label="Search"
                >
                  🔍
                </button>
                {showSearch && (
                  <input
                    autoFocus
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search titles"
                    className="ml-2 w-full bg-transparent text-[0.78rem] placeholder:text-slate-400 focus:outline-none"
                  />
                )}
              </motion.div>
            </div>

            {/* Profile */}
            <div className="relative">
              <button
                onClick={() => setOpenProfile((v) => !v)}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-slate-100 via-slate-400 to-slate-700 text-[0.8rem] font-semibold text-slate-900 ring-2 ring-white/60 shadow-glow-soft"
              >
                JP
              </button>
              {openProfile && (
                <div className="absolute right-0 mt-3 w-44 rounded-2xl border border-white/10 bg-night-elevated/95 p-2 text-xs text-slate-100 shadow-glow-soft backdrop-blur-2xl">
                  <div className="px-2 py-2">
                    <p className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
                      Profile
                    </p>
                    <p className="mt-1 font-medium">Nova Experience</p>
                  </div>
                  <div className="my-1 h-px bg-gradient-to-r from-transparent via-slate-500/50 to-transparent" />
                  <button className="flex w-full items-center justify-between rounded-xl px-2 py-1.5 text-left text-[0.8rem] hover:bg-white/5">
                    <span>Manage account</span>
                    <span className="text-slate-400">⌘A</span>
                  </button>
                  <button className="flex w-full items-center justify-between rounded-xl px-2 py-1.5 text-left text-[0.8rem] hover:bg-white/5">
                    <span>Parental controls</span>
                  </button>
                  <button className="mt-1 flex w-full items-center justify-between rounded-xl px-2 py-1.5 text-left text-[0.8rem] text-red-300 hover:bg-red-500/10">
                    <span>Sign out</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.nav>
    </header>
  );
};

export default NavBar;

