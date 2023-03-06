/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow:{
        'outline':'0 0px 1px rgba(0,0,0,1)'
      },
    },
  },
  plugins: [],
}