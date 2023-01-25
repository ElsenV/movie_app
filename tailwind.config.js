/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        "dm serif": ["DM Serif", "serif"],
        com: ["Comfortaa", "cursive"],
      },
    },
  },
  plugins: [],
};
