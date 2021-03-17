const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js, jsx, ts, tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      mustard: "#E3AE00",
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      greese: "#535353A3",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
