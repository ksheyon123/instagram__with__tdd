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
        "home-phone": "url('../../public/assets/images/home_phones_2x.png')",
        "insta-logos": "url(../../public/assets/images/insta_logos.png)",
        "footer-texture": "url('/img/footer-texture.png')",
      },
      backgroundSize: {
        "home-p-size": "468.32px 634.15px",
      },
      backgroundPosition: {
        "left-46": "-46px 0px",
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
