/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      fontFamily:{
        "sans": ["Roboto", "sans-serif"]
      },
      backgroundImage: {
        "home": "url('/assets/img/bg.png')"
      }
    },
  },
  plugins: [],
};

