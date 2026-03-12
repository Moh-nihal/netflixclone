import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const featured = {
  id: 'featured-1',
  title: 'Silent Orbit',
  tag: 'New · Original Series',
  description:
    'A crew on the edge of the galaxy receives a transmission from a future that should not exist.',
  rating: '16+',
  year: '2025',
  duration: '1 Season',
  genre: 'Sci‑Fi · Thriller',
  backdrop: '/images/image3.jpeg',
  poster: '/images2/image5.jpg',
};

const toWebp = (src) => src.replace(/\.(jpe?g)$/i, '.webp');

const makeRow = (id, title, subtitle, sourcePrefix, count, offset = 0) => ({
  id,
  title,
  subtitle,
  items: [...Array(count)].map((_, index) => {
    const baseIndex = index + 1 + offset;
    return {
      id: `${id}-${baseIndex}`,
      title: `Title ${baseIndex}`,
      rating: ['13+', '16+', '18+'][index % 3],
      tag: index % 5 === 0 ? 'New' : index % 4 === 0 ? 'Trending' : 'Featured',
      image: `${sourcePrefix}${baseIndex}.jpeg`.replace('.jpeg.jpeg', '.jpeg'),
      backdrop: `${sourcePrefix}${((baseIndex + 2) % count) + 1}.jpeg`.replace(
        '.jpeg.jpeg',
        '.jpeg',
      ),
    };
  }),
});

const rows = [
  makeRow(
    'recent',
    'Recently added',
    'Freshly arrived from studios worldwide.',
    '/images/image',
    24,
  ),
  {
    id: 'web-series',
    title: 'Signature series',
    subtitle: 'Long‑form worlds built for deep watching.',
    items: [...Array(20)].map((_, index) => ({
      id: `web-${index + 1}`,
      title: `Arc ${index + 1}`,
      rating: ['PG', '13+', '16+'][index % 3],
      tag: index % 4 === 0 ? 'New Season' : 'Binge‑worthy',
      image: `/images2/image${index + 1}.jpg`,
      backdrop: `/images2/image${((index + 3) % 20) + 1}.jpg`,
    })),
  },
  {
    id: 'tv',
    title: 'Immersive television',
    subtitle: 'Weekly episodes with cinematic ambition.',
    items: [...Array(12)].map((_, index) => ({
      id: `tv-${index + 1}`,
      title: `Channel ${index + 1}`,
      rating: ['PG', '13+', '16+'][index % 3],
      tag: index % 3 === 0 ? 'Live' : 'Serial',
      image: `/images3/image${index + 1}.jpg`,
      backdrop: `/images3/image${((index + 4) % 12) + 1}.jpg`,
    })),
  },
  {
    id: 'music',
    title: 'Visual albums',
    subtitle: 'Concert films, live sessions, and visual EPs.',
    items: [...Array(24)].map((_, index) => ({
      id: `music-${index + 1}`,
      title: `Session ${index + 1}`,
      rating: 'All',
      tag: index % 4 === 0 ? 'Live' : '4K',
      image: `/images4/image${index + 1}.jpg`,
      backdrop: `/images4/image${((index + 5) % 24) + 1}.jpg`,
    })),
  },
];

const cardVariants = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

const Home = () => {
  return (
    <div className="space-y-10 lg:space-y-14 xl:space-y-16">
      {/* Hero */}
      <section className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.9fr)] items-center">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 0.61, 0.36, 1] }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-night-elevated/80 px-3 py-1 text-[0.7rem] uppercase tracking-[0.25em] text-slate-200 ring-1 ring-white/10 backdrop-blur-xl">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(74,222,128,0.8)]" />
            Now streaming in 4K HDR
          </div>
          <div className="space-y-3">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold tracking-tight font-display">
              Watch stories in a new light.
            </h1>
            <p className="max-w-xl text-sm sm:text-base text-slate-200/90">
              NovaX is a premium streaming room designed around your screen —
              with cinematic motion, spatial audio, and curated collections that
              feel made for you.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.03, boxShadow: '0 18px 45px rgba(15,23,42,0.9)' }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 rounded-full bg-slate-50 px-6 py-2.5 text-sm font-semibold text-slate-950 shadow-glow-soft"
            >
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-slate-900 text-slate-50">
                ▶
              </span>
              Continue watching
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 rounded-full bg-night-elevated/80 px-5 py-2.5 text-sm font-semibold text-slate-50 ring-1 ring-white/20 backdrop-blur-xl"
            >
              Surprise me
            </motion.button>
          </div>

          <div className="flex flex-wrap gap-4 text-xs text-slate-300/90">
            <div className="flex items-center gap-2 rounded-full bg-white/5 px-3 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-violet shadow-[0_0_12px_rgba(168,85,247,0.8)]" />
              Studio‑grade audio
            </div>
            <div className="flex items-center gap-2 rounded-full bg-white/5 px-3 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-cyan shadow-[0_0_12px_rgba(56,189,248,0.9)]" />
              Adaptive visuals
            </div>
            <div className="flex items-center gap-2 rounded-full bg-white/5 px-3 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-neon shadow-[0_0_12px_rgba(249,115,22,0.9)]" />
              Curated premieres
            </div>
          </div>
        </motion.div>

        {/* Hero preview card */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="relative h-64 overflow-hidden rounded-3xl border border-white/8 bg-night-soft/80 shadow-glow-soft backdrop-blur-2xl sm:h-80 lg:h-[22rem]"
        >
          <Link
            to={`/title/${featured.id}`}
            state={{ movie: featured }}
            className="group block h-full w-full"
          >
            <div className="absolute inset-0 overflow-hidden">
              <picture>
                <source type="image/webp" srcSet={toWebp(featured.backdrop)} />
                <motion.img
                  src={featured.backdrop}
                  alt={featured.title}
                  loading="eager"
                  decoding="async"
                  fetchpriority="high"
                  className="h-full w-full object-cover object-top"
                  initial={{ scale: 1.05 }}
                  animate={{ scale: 1.02 }}
                  transition={{ duration: 12, repeat: Infinity, repeatType: 'mirror' }}
                />
              </picture>
              <div className="absolute inset-0 bg-gradient-to-tr from-black via-black/70 to-transparent" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_0_0,rgba(168,85,247,0.45),transparent_55%),radial-gradient(circle_at_120%_120%,rgba(56,189,248,0.45),transparent_55%)] mix-blend-screen opacity-60" />
            </div>

            <div className="relative z-10 flex h-full flex-col justify-end p-5 sm:p-7">
              <div className="space-y-1.5">
                <p className="text-[0.7rem] uppercase tracking-[0.28em] text-slate-200">
                  {featured.tag}
                </p>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight">
                  {featured.title}
                </h2>
                <p className="max-w-lg text-xs sm:text-sm text-slate-200/90 line-clamp-2">
                  {featured.description}
                </p>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center gap-3 text-[0.72rem] text-slate-200/90">
                  <span className="rounded border border-white/30 bg-black/40 px-2 py-0.5 font-semibold">
                    {featured.rating}
                  </span>
                  <span>{featured.year}</span>
                  <span className="h-1 w-1 rounded-full bg-slate-400" />
                  <span>{featured.genre}</span>
                </div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center gap-2 rounded-full bg-slate-50/95 px-3 py-2 text-[0.75rem] font-semibold text-slate-950 shadow-glow-soft"
                >
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-slate-900 text-[0.6rem] text-slate-50">
                    ▶
                  </span>
                  Play
                </motion.div>
              </div>
            </div>
          </Link>
        </motion.div>
      </section>

      {/* Rows */}
      <section className="space-y-8 lg:space-y-10">
        {rows.map((row, rowIndex) => (
          <motion.div
            key={row.id}
            variants={cardVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: rowIndex * 0.04 }}
            className="space-y-3"
          >
            <div className="flex items-baseline justify-between gap-2">
              <div>
                <h3 className="text-sm sm:text-base font-semibold tracking-wide text-slate-100/95">
                  {row.title}
                </h3>
                {row.subtitle && (
                  <p className="mt-1 text-[0.75rem] text-slate-400">{row.subtitle}</p>
                )}
              </div>
              <button className="hidden text-[0.7rem] font-medium uppercase tracking-[0.22em] text-slate-400 hover:text-slate-200 md:inline-flex">
                See all
              </button>
            </div>

            <div className="scrollbar-hide flex gap-3 overflow-x-auto pb-1 pt-1">
              {row.items.map((item, index) => (
                <motion.div
                  key={item.id}
                  whileHover={{
                    y: -8,
                    scale: 1.05,
                  }}
                  transition={{ type: 'spring', stiffness: 320, damping: 24 }}
                  className="group relative h-40 w-32 shrink-0 rounded-2xl bg-night-soft/80 ring-1 ring-white/8 shadow-glow-soft backdrop-blur-xl sm:h-48 sm:w-36 lg:h-52 lg:w-40"
                >
                  <Link
                    to={`/title/${item.id}`}
                    state={{
                      movie: {
                        id: item.id,
                        title: item.title,
                        rating: item.rating,
                        year: '2024',
                        duration: '2h 04m',
                        genre:
                          row.id === 'music'
                            ? 'Music · Live'
                            : row.id === 'tv'
                            ? 'Series'
                            : 'Feature',
                        description: featured.description,
                        backdrop: item.backdrop || item.image,
                        poster: item.image,
                      },
                    }}
                    className="block h-full w-full"
                  >
                    <div className="relative h-full w-full overflow-hidden rounded-2xl">
                      <picture>
                        <source type="image/webp" srcSet={toWebp(item.image)} />
                        <img
                          src={item.image}
                          alt={item.title}
                          loading="lazy"
                          decoding="async"
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                      </picture>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/5 opacity-90 group-hover:from-black/90 group-hover:via-black/40" />

                      {/* Overlay info */}
                      <div className="absolute inset-x-2 bottom-2 space-y-1.5 text-[0.7rem] sm:text-[0.75rem]">
                        <div className="flex items-center gap-1.5">
                          <span className="rounded border border-white/30 bg-black/50 px-1.5 py-0.5 text-[0.65rem] font-semibold">
                            {item.rating}
                          </span>
                          <span className="rounded-full bg-white/10 px-2 py-0.5 text-[0.65rem] text-slate-200">
                            {item.tag}
                          </span>
                        </div>
                        <p className="line-clamp-1 font-medium text-slate-50">
                          {item.title}
                        </p>
                        <div className="flex items-center gap-1.5 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                          <button className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-50 text-[0.6rem] text-slate-950 shadow-glow-soft">
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
                    </div>
                  </Link>

                  {/* Glow ring */}
                  <div className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 ring-1 ring-accent-cyan/60 blur-[1px] transition-opacity duration-200 group-hover:opacity-100" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </section>
    </div>
  );
};

export default Home;
