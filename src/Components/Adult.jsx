import React from 'react';
import { motion } from 'framer-motion';

const Adult = () => {
  return (
    <div className="space-y-5">
      <div className="space-y-2">
        <h1 className="text-xl sm:text-2xl font-semibold tracking-tight">
          Restricted corner
        </h1>
        <p className="max-w-xl text-xs sm:text-sm text-slate-400">
          This area is protected by advanced parental controls. Adjust your profile settings to
          manage what appears here.
        </p>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="relative overflow-hidden rounded-3xl border border-dashed border-white/15 bg-night-soft/70 p-6 text-sm text-slate-300 shadow-glow-soft backdrop-blur-2xl sm:p-8"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_0_0,rgba(248,250,252,0.08),transparent_55%),radial-gradient(circle_at_100%_100%,rgba(30,64,175,0.28),transparent_55%)] opacity-80" />
        <div className="relative space-y-3">
          <p className="text-[0.75rem] uppercase tracking-[0.22em] text-slate-400">
            Safety‑first design
          </p>
          <p>
            NovaX treats mature content as a fully opt‑in experience. Profiles, PINs, and viewing
            levels give you granular control over what&apos;s available on each screen.
          </p>
          <p className="text-slate-400">
            To configure access, open your profile menu, choose{' '}
            <span className="text-slate-200">Parental controls</span>, and adjust rating limits,
            time windows, and profile locks.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Adult;

