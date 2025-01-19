/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: '"Inter", serif',
        rubik: '"Rubik", serif',
      },
      borderRadius: {
        20: "20px",
      },
    },
    colors: {
      "secondary-light": "rgba(240, 243, 247, 1)",
      "secondary-dark": "rgba(151, 170, 198, 1)",
      accent: "rgba(30, 30, 30, 0.94)",
      black: "rgba(0, 0, 0, 1)",
      white: "rgba(255, 255, 255, 1)",
    },
  },
  plugins: [],
};
