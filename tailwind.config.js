/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: '"Inter", serif',
        rubik: '"Rubik", serif',
        roboto: '"Roboto", serif',
      },
      borderRadius: {
        20: "20px",
        32: "32px",
      },
      screens: {
        "2k": "2000px",
      },
    },
    colors: {
      "secondary-light": "rgba(240, 243, 247, 1)",
      "secondary-dark": "rgba(151, 170, 198, 1)",
      accent: "rgba(30, 30, 30, 0.94)",
      black: "rgba(0, 0, 0, 1)",
      white: "rgba(255, 255, 255, 1)",
      grey: "rgba(107, 107, 107, 1)",
    },
  },
  plugins: [],
};
