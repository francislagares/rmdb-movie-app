/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      height: {
        128: '40rem',
      },
    },
    fontFamily: {
      raleway: ['Raleway', 'sans-serif'],
    },
  },
  plugins: [],
};
