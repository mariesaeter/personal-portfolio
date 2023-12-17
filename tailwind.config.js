/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

export default {
  content: ["./index.html", "./src/**/*.mjs"],
  theme: {
    colors: {
      main: {
        black: "#0c1004",
        white: "#f7f5f6",
      },
      "plant-green": {
        light: "#abd85d",
        DEFAULT: "#6b9424",
        dark: "#2f4210",
      },
      "flower-purple": {
        light: "#ecd5e7",
        DEFAULT: "#c072ae",
        dark: "#7f3070",
      },
    },
    fontFamily: {
      sans: ["Raleway", "sans-serif"],
      serif: ["Oranienbaum", "serif"],
    },
    extend: {},
  },
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        html: { fontSize: "16px" },
      });
    }),
  ],
};
