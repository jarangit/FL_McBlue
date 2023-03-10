/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        marquee: 'marquee 10s linear infinite',
        marquee2: 'marquee2 10s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-30%)' },
        },
      },
    },
    colors: {
      "blue": {
        light: "#3a74eb",
        DEFAULT: "#1f3cc0",
        dark:"#404a8d"
      },
      "black": {
        DEFAULT: "#000",
      },
      "yellow": {
        DEFAULT: "#F0E664",
        dark:"#FFD71D"
      },
      "white": {
        DEFAULT: "#ffff",
      },
      "red": {
        DEFAULT: "#ff4c4c",
      },
    }
  },
  plugins: [],
}