/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "bebas-neue": ["Bebas Neue"],
        aboreto: ["Aboreto"],
        jomolhari: ["Jomolhari"],
      },
    },
    colors: {
      ...colors,
      "custom-gold": "#d6a609",
    },
  },
  plugins: [],
};
