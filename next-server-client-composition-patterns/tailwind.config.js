// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  // Set the dark mode strategy to 'class' to allow manual toggling
  darkMode: 'class',

  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './contexts/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
