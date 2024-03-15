// tailwind.config.js
const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // ...
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderColor0: "rgb(219, 219, 219)",
    },
    screens: {
      sm: { min: "0px", max: "450px" },
      md: { min: "451px", max: "875px" },
      lg: { min: "876px" },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
