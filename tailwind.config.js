/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  darkMode: "class",

  theme: {
    extend: {
      colors: {
        primary: "#14b8a6",
        secondary: "#1e293b",
        accent: "#cbd5e1",
      },
    },
  },
  plugins: [],
};
