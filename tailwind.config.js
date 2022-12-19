/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      "blue":{
        light:"#3a74eb",
        DEFAULT:"#1f3cc0"
      }
    }
  },
  plugins: [],
}