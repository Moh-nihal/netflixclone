import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const sessions = [...Array(24)].map((_, index) => ({
  id: `session-${index + 1}`,
  title: `Session ${index + 1}`,
  image: `/images4/image${index + 1}.jpg`,
  tag: index % 3 === 0 ? 'Live' : 'Visual album',
}));

const Songs = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-baseline justify-between gap-2">
        <div>
          <h1 className="text-xl sm:text-2xl font-semibold tracking-tight">
            Visual albums & live sessions
          </h1>
          <p className="mt-1 text-xs sm:text-sm text-slate-400">
            Music, captured like cinema — performances, tours, and studio sessions.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {sessions.map((session, index) => (
          <motion.div
            key={session.id}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.02 }}
            whileHover={{ y: -6, scale: 1.03 }}
            className="group relative overflow-hidden rounded-2xl bg-night-soft/90 ring-1 ring-white/8 shadow-glow-soft backdrop-blur-xl"
          >
            <Link
              to={`/title/${session.id}`}
              state={{
                movie: {
                  id: session.id,
                  title: session.title,
                  rating: 'All',
                  year: '2024',
                  duration: '1h 20m',
                  genre: 'Music · Live',
                  description:
                    'Captured in one continuous take with intimate sound design and stage‑grade lighting.',
                  poster: session.image,
                  backdrop: session.image,
                },
              }}
              className="block h-full"
            >
              <div className="relative h-40 w-full sm:h-48 md:h-52 lg:h-56">
                <img
                  src={session.image}
                  alt={session.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/5" />
              </div>

              <div className="absolute inset-x-2 bottom-2 space-y-1 text-[0.72rem] text-slate-200">
                <div className="flex items-center gap-1.5">
                  <span className="rounded-full bg-white/10 px-2 py-0.5 text-[0.62rem]">
                    {session.tag}
                  </span>
                </div>
                <p className="line-clamp-1 text-[0.8rem] font-medium text-slate-50">
                  {session.title}
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Songs;