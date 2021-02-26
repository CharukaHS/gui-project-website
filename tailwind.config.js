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
      textColor: {
        sub: "#707070",
      },
      maxHeight: {
        "1/2": "50%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
