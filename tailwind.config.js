// tailwind.config.js
const { nextui } = require("@nextui-org/react");
const { styles } = require("./src/styles/index");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // ...
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ...styles.COLOR,
      },
      backgroundImage: {
        "insta-logos": "url(./public/assets/images/insta_logos.png)",
        "footer-texture": "url('/img/footer-texture.png')",
      },
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
