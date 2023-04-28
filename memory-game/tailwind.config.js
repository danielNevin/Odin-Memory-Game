const { transform } = require('lodash')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        red: '#ff0000',
        orange: '#ff9900',
        yellow: '#ffff00',
        lime: '#bfff00',
        green: '#00ff00',
        teal: '#00ffff',
        blue: '#0000ff',
        indigo: '#4b0082',
        purple: '#800080',
        pink: '#ff00ff',
        fuchsia: '#ff00ff',
        maroon: '#800000',
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      },
      keyframes: {
        'slow-pulse': {
          '0%, 100%': {
            opacity: '100%',
            scale: '1'
          },
          '50%': {
            opacity: '75%',
            scale: '1.03'
          },
        },
      },
      animation: {
        'slow-pulse': 'slow-pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite'
      },
    }
  }, 
  plugins: [],
}