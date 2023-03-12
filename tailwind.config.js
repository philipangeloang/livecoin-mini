/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: "Poppins",
        dmsans: "DM Serif Display",
      },
      colors: {
        black: "#383838",
        yellow: "#CDBE78",
        azure: "#F2F2F2",
      },
    },
  },
  plugins: [],
};
