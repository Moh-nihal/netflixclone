import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

const fallbackDescription =
  'Immerse yourself in a rich cinematic universe with ultra‑sharp visuals, spatial sound, and a story that unfolds with every frame.';

const MovieDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();

  // Prefer state passed from cards; gracefully degrade if user visits directly
  const movie = location.state?.movie || {
    id,
    title: 'Untitled Vision',
    rating: 'PG-13',
    year: '2024',
    duration: '2h 10m',
    genre: 'Sci‑Fi · Drama',
    description: fallbackDescription,
    backdrop: '/images/image1.jpeg',
    poster: '/images2/image1.jpg',
  };

  return (
    <div className="relative min-h-[70vh]">
      {/* Background layer */}
      <div className="absolute inset-0">
        <motion.div
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
          className="relative h-full w-full overflow-hidden rounded-3xl bg-night-soft/70 shadow-glow-soft"
        >
          <img
            src={movie.backdrop || movie.poster}
            alt={movie.title}
            className="h-full w-full object-cover object-top opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-night-bg via-night-bg/80 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(168,85,247,0.45),transparent_55%),radial-gradient(circle_at_90%_80%,rgba(56,189,248,0.4),transparent_55%)] mix-blend-screen opacity-60" />
        </motion.div>
      </div>

      {/* Foreground content */}
      <div className="relative z-10 flex flex-col lg:flex-row gap-10 lg:gap-14 pt-10 pb-6 lg:pt-16 lg:pb-10 px-2 md:px-4">
        {/* Poster */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="mx-auto lg:mx-0 w-52 sm:w-60 md:w-64 lg:w-72 shrink-0 rounded-3xl bg-night-elevated/80 p-[3px] shadow-glow-accent backdrop-blur-xl"
        >
          <div className="relative h-full w-full overflow-hidden rounded-[1.3rem] bg-night-soft">
            <img
              src={movie.poster || movie.backdrop}
              alt={`${movie.title} poster`}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
          </div>
        </motion.div>

        {/* Info */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.55 }}
          className="flex-1 space-y-6 lg:space-y-8"
        >
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full bg-night-elevated/70 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-slate-300/80 ring-1 ring-white/10 backdrop-blur-xl">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-neon shadow-[0_0_12px_rgba(249,115,22,0.9)]" />
              Next‑Gen Original
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold tracking-tight font-display">
              {movie.title}
            </h1>
            <div className="flex flex-wrap items-center gap-3 text-sm text-slate-300/80">
              {movie.year && <span>{movie.year}</span>}
              {movie.rating && (
                <>
                  <span className="h-1 w-1 rounded-full bg-slate-500" />
                  <span className="rounded-md border border-white/15 bg-black/30 px-2 py-0.5 text-[11px] font-semibold">
                    {movie.rating}
                  </span>
                </>
              )}
              {movie.duration && (
                <>
                  <span className="h-1 w-1 rounded-full bg-slate-500" />
                  <span>{movie.duration}</span>
                </>
              )}
              {movie.genre && (
                <>
                  <span className="h-1 w-1 rounded-full bg-slate-500" />
                  <span className="text-slate-200">{movie.genre}</span>
                </>
              )}
            </div>
          </div>

          <p className="max-w-2xl text-sm sm:text-base text-slate-200/85">
            {movie.description || fallbackDescription}
          </p>

          {/* Actions */}
          <div className="flex flex-wrap items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.03, boxShadow: '0 18px 45px rgba(15,23,42,0.85)' }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 rounded-full bg-slate-50 px-6 py-2.5 text-sm font-semibold text-slate-950 shadow-glow-soft"
            >
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-slate-900 text-slate-50">
                ▶
              </span>
              Play
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 rounded-full bg-night-elevated/80 px-5 py-2.5 text-sm font-semibold text-slate-50 ring-1 ring-white/20 backdrop-blur-xl"
            >
              ℹ More info
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center rounded-full bg-night-elevated/90 px-3 py-2 text-lg text-accent-cyan ring-1 ring-cyan-400/50 backdrop-blur-xl"
            >
              ＋
            </motion.button>
          </div>

          {/* Cast & meta */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 text-xs sm:text-sm text-slate-300/90">
            <div className="space-y-1.5">
              <div className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
                Cast
              </div>
              <div className="space-x-1.5">
                <span className="inline-flex rounded-full bg-white/5 px-3 py-1">Lead Actor</span>
                <span className="inline-flex rounded-full bg-white/5 px-3 py-1">Lead Actress</span>
              </div>
            </div>
            <div className="space-y-1.5">
              <div className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
                Director
              </div>
              <p>Visionary Filmmaker</p>
            </div>
            <div className="space-y-1.5">
              <div className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
                Viewing options
              </div>
              <p>4K · HDR · Dolby Atmos</p>
            </div>
          </div>

          {/* Related row placeholder */}
          <div className="mt-4 space-y-3">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-semibold tracking-wide text-slate-100/90">
                Related titles
              </h2>
              <button
                onClick={() => navigate(-1)}
                className="text-xs text-slate-400 hover:text-slate-200 transition-colors"
              >
                Back to browsing
              </button>
            </div>
            <div className="flex gap-3 overflow-x-auto pb-1 scrollbar-hide">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="h-32 w-40 shrink-0 rounded-2xl bg-night-soft/70 ring-1 ring-white/5 backdrop-blur-xl"
                >
                  <div className="h-full w-full bg-gradient-to-br from-slate-600/40 via-slate-900/60 to-black/80" />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MovieDetail;

