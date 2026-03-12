/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['system-ui', 'ui-sans-serif', 'sans-serif'],
        sans: ['system-ui', 'ui-sans-serif', 'sans-serif'],
      },
      colors: {
        'night-bg': '#030014',
        'night-elevated': 'rgba(22, 22, 40, 0.85)',
        'night-soft': 'rgba(22, 22, 40, 0.6)',
        'accent-violet': '#a855ff',
        'accent-cyan': '#22d3ee',
        'accent-neon': '#f97316',
      },
      backgroundImage: {
        'app-radial':
          'radial-gradient(circle at top, rgba(56, 189, 248, 0.35), transparent 55%), radial-gradient(circle at 20% 80%, rgba(168, 85, 247, 0.3), transparent 55%), radial-gradient(circle at 80% 90%, rgba(244, 63, 94, 0.45), transparent 60%)',
      },
      boxShadow: {
        'glow-soft': '0 18px 45px rgba(15, 23, 42, 0.75)',
        'glow-accent': '0 0 35px rgba(56, 189, 248, 0.55)',
      },
    },
  },
  plugins: [],
}