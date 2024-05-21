/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      backgroundImage: {
        "home": "url('/assets/img/bg.png')"
      }
    },
  },
  plugins: [],
};

