import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const movies = [...Array(30)].map((_, index) => ({
  id: `movie-${index + 1}`,
  title: `Feature ${index + 1}`,
  image: `/images/image${index + 1}.jpeg`,
  backdrop: `/images/image${((index + 4) % 30) + 1}.jpeg`,
  rating: ['PG', '13+', '16+', '18+'][index % 4],
  duration: `${1 + (index % 3)}h ${10 + (index % 5) * 5}m`,
}));

const Movies = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-baseline justify-between gap-2">
        <div>
          <h1 className="text-xl sm:text-2xl font-semibold tracking-tight">
            Films built for the big screen
          </h1>
          <p className="mt-1 text-xs sm:text-sm text-slate-400">
            A cinematic gallery of features, remastered and tuned for your setup.
          </p>
        </div>
        <div className="hidden text-[0.7rem] uppercase tracking-[0.22em] text-slate-400 sm:inline-flex">
          Curated for you
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {movies.map((movie, index) => (
          <motion.div
            key={movie.id}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.02 }}
            whileHover={{ y: -6, scale: 1.03 }}
            className="group relative overflow-hidden rounded-2xl bg-night-soft/85 ring-1 ring-white/8 shadow-glow-soft backdrop-blur-xl"
          >
            <Link
              to={`/title/${movie.id}`}
              state={{
                movie: {
                  id: movie.id,
                  title: movie.title,
                  rating: movie.rating,
                  year: '2024',
                  duration: movie.duration,
                  genre: 'Feature · Drama',
                  description:
                    'Shot on large‑format cinema cameras and mastered in 4K HDR for NovaX.',
                  poster: movie.image,
                  backdrop: movie.backdrop,
                },
              }}
              className="block h-full"
            >
              <div className="relative h-40 w-full sm:h-48 md:h-52 lg:h-56">
                <img
                  src={movie.image}
                  alt={movie.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/5" />
              </div>

              <div className="absolute inset-x-2 bottom-2 space-y-1 text-[0.72rem] text-slate-200">
                <div className="flex items-center gap-1.5">
                  <span className="rounded border border-white/35 bg-black/50 px-1.5 py-0.5 text-[0.62rem] font-semibold">
                    {movie.rating}
                  </span>
                  <span className="rounded-full bg-white/10 px-2 py-0.5 text-[0.62rem]">
                    4K · HDR
                  </span>
                </div>
                <p className="line-clamp-1 text-[0.8rem] font-medium text-slate-50">
                  {movie.title}
                </p>
                <div className="flex items-center gap-1.5 opacity-0 transition-opacity duration-150 group-hover:opacity-100">
                  <button className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-50 text-[0.65rem] text-slate-950 shadow-glow-soft">
                    ▶
                  </button>
                  <button className="flex h-6 w-6 items-center justify-center rounded-full bg-black/60 text-[0.7rem] text-slate-100 ring-1 ring-white/20">
                    i
                  </button>
                  <button className="flex h-6 w-6 items-center justify-center rounded-full bg-black/60 text-[0.7rem] text-accent-cyan ring-1 ring-cyan-400/60">
                    ＋
                  </button>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Movies;
