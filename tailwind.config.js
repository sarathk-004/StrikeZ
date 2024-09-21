// const {nextui} = require('@nextui-org/theme');
// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//     "// Adjust this path as necessary",
//     "./node_modules/@nextui-org/theme/dist/components/[object Object].js"
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [nextui()],
// };

const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui()],
};