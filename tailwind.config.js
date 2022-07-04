/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        green:"#0eb582",
        light_green:"#f0fdfa",
        light_color:"#777",
        light_white:"#eee",
        black:"#444",
        primary_white:"#fff"
      }
    },
  },
  plugins: [],
}
