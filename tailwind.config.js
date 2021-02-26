module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#FEDE00",
        secondry: "#2C1292",
        thirdary: "#F4F7F4",
      },
      fontFamily: {
        topic: ["Roboto Condensed", "sans-serif"],
        primary: ["Montserrat", "sans-serif"],
      },
      maxHeight: {
        "1/2": "50%",
      },
      textColor: {
        sub: "#707070",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
