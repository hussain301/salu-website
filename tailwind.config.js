/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "node_modules/preline/dist/*.js",
  ],
  mode: "jit",
  theme: {
    container: {
      center: true,
    },
    extend: {
      keyframes: {
        move: {
          "0%": { transform: "translate(100%, 0)" },
          "100%": { transform: "translate(-100%, 0)" },
        },
      },
      animation: {
        move: "move 15s linear infinite",
      },
      colors: {
        headingPrimary: "#01366A",
        secondary: "#2c3366",
        tertiary: "#444977",
        quaternary: "#5b6088",
      },
    },
  },
  plugins: [require("preline/plugin")],
};
// #F3F4F6
