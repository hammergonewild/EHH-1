/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'karma': ['Good Karma', 'serif'],
        'playfair': ['Playfair Display', 'serif'],
        'sans': ['Oswald', 'sans-serif'],
      },
      colors: {
        'hotel-gold': '#A2874F',
      }
    },
  },
  plugins: [],
};