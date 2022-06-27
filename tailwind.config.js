/** @type {import('tailwindcss').Config} */
const theme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", ...theme.fontFamily.sans],
        heading: ["Raleway", "sans-serif"],
      },
      colors: {
        "primary-blue-1": "#202a3c",
        "priamry-blue-2": "#1c2431",
        "primary-blue-3": "#181f2a",
        "primary-blue-4": "#0b1523",
        "accent-cyan": "#65e2d9",
        "accent-blue": "#339ecc",
        "accent-red": "#ff4242",
      },
    },
  },
  plugins: [],
};
