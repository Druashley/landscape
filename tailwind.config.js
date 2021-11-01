module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        cream: "#fcf1cf",
      },
      fontFamily: {
        "roboto-condensed": ["Roboto Condensed", "sans-serif"],
        "permanent-marker": ["Permanent Marker", "cursive"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
