/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ivory: '#FAF7F2',
        rose: {
          gold: '#E8B4B4',
          bright: '#F4C2C2',
          muted: '#D48B8B',
          warm: '#E07A7A',
        },
        burgundy: {
          DEFAULT: '#4A121A',
          deep: '#360B12',
          rich: '#22070C',
        },
        card: {
          dark: '#241E20',
          hover: '#2E272A',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        handwriting: ['Caveat', 'cursive'],
      },
    },
  },
  plugins: [],
};
