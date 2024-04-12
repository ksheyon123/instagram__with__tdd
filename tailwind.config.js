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
        "home-phone": "url('../../src/assets/images/home_phones_2x.png')",
        "log-fb-0": "url('../../src/assets/images/ig_icons.png')",
        "ig-imgs-1": "url(../../src/assets/images/ig_imgs_1.png)",
      },
      backgroundSize: {
        "home-p-size": "468.32px 634.15px",
        "log-fb-size": "440px 411px",
        "ig-logo-size": "176px 258px",
      },
      backgroundPosition: {
        "left-46": "-46px 0px",
        "log-fb-pos": "-347px -329px",
        "l-0-t-0": "0px 0px",
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
