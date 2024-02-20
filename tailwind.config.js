/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#b3b3b3",
      },
      boxShadow: {
        card: "0px 2px 60px -30px #f78c0a",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
        "section-pattern": "url('/src/assets/sectionbg.jpg')",
      },
    },
  },
  plugins: [],
};
