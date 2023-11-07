/** @type {import('tailwindcss').Config} */
module.exports = {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        colors: {
            ryellow: '#FFAA29',
            rgreen: {
                100: '#489B53',
                200: '#306737',
            }
        },
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }