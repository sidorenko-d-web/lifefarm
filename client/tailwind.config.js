/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      "c-green":"#119822",
      "c-yellow":"#FFBF00",
      'c-black': {
          100: "#d6d6d5",
          200: "#adadaa",
          300: "#858380",
          400: "#5c5a55",
          500: "#33312b",
          600: "#292722",
          700: "#1f1d1a",
          800: "#141411",
          900: "#0a0a09"
},
      "c-white":"#fafafa",
      "c-bg":"#f5f5f5",
      "c-red":"#D64949",
      "c-placeholder":"#C3C8A8",
    },
    
    extend: {
      colors: {
        ...colors
      },
      backgroundImage:{
        registration:'url(./registration-bg.svg)'
      },
      boxShadow: {"c-sh" : "0 4px 6px 2px rgba(0, 0, 0, 0.15)"},
      keyframes:{
        openlist:{
          '0%':{transform: 'scaleY(0)'},
          '100%':{transform: 'scaleY(1)'}
        }
      },
      animation:{
        openlist:'openlist .3s ease'
      }
    },
  },
  plugins: [],
}

