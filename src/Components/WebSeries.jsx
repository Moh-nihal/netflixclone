import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const series = [...Array(20)].map((_, index) => ({
  id: `series-${index + 1}`,
  title: `Continuum ${index + 1}`,
  image: `/images2/image${index + 1}.jpg`,
  rating: ['PG', '13+', '16+'][index % 3],
  tag: index % 4 === 0 ? 'New Season' : 'Binge',
}));

const WebSeries = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-baseline justify-between gap-2">
        <div>
          <h1 className="text-xl sm:text-2xl font-semibold tracking-tight">
            Signature series
          </h1>
          <p className="mt-1 text-xs sm:text-sm text-slate-400">
            Long‑form worlds crafted for deep, late‑night watching.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {series.map((show, index) => (
          <motion.div
            key={show.id}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.02 }}
            whileHover={{ y: -6, scale: 1.03 }}
            className="group relative overflow-hidden rounded-2xl bg-night-soft/90 ring-1 ring-white/8 shadow-glow-soft backdrop-blur-xl"
          >
            <Link
              to={`/title/${show.id}`}
              state={{
                movie: {
                  id: show.id,
                  title: show.title,
                  rating: show.rating,
                  year: '2024',
                  duration: '10 episodes',
                  genre: 'Series · Sci‑Fi',
                  description:
                    'Each chapter expands the universe with serialized arcs and evolving characters.',
                  poster: show.image,
                  backdrop: show.image,
                },
              }}
              className="block h-full"
            >
              <div className="relative h-40 w-full sm:h-48 md:h-52 lg:h-56">
                <img
                  src={show.image}
                  alt={show.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/5" />
              </div>

              <div className="absolute inset-x-2 bottom-2 space-y-1 text-[0.72rem] text-slate-200">
                <div className="flex items-center gap-1.5">
                  <span className="rounded border border-white/35 bg-black/55 px-1.5 py-0.5 text-[0.62rem] font-semibold">
                    {show.rating}
                  </span>
                  <span className="rounded-full bg-white/10 px-2 py-0.5 text-[0.62rem]">
                    {show.tag}
                  </span>
                </div>
                <p className="line-clamp-1 text-[0.8rem] font-medium text-slate-50">
                  {show.title}
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WebSeries;
