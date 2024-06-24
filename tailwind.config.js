/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#110828",
        secondary: "#370D68",
        terciary: "#F1A23A",
        cuaternary: '#ED762F'
      }
    },
  },
  plugins: [],
}

