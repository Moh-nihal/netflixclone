// src/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="mt-10 border-t border-white/5 bg-gradient-to-t from-black/70 via-black/30 to-transparent py-6 text-xs text-slate-400 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          <p>© {new Date().getFullYear()} NovaX Studios. All rights reserved.</p>
          <p className="text-[0.7rem]">
            Designed as a concept for a next‑generation cinematic streaming platform.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 text-[0.7rem]">
          <button className="rounded-full bg-white/5 px-3 py-1 text-slate-200 hover:bg-white/10">
            Privacy
          </button>
          <button className="rounded-full bg-white/5 px-3 py-1 text-slate-200 hover:bg-white/10">
            Terms
          </button>
          <button className="rounded-full bg-white/5 px-3 py-1 text-slate-200 hover:bg-white/10">
            Accessibility
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
