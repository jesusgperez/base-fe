/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx,svg}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#110828",
        secondary: "#370D68",
        terciary: "#F1A23A",
        cuaternary: '#ED762F',
        selection: "#166bac"
      },
      fontSize: {
        '2xs': '0.625rem'
      }
    },
    backgroundImage: (theme) => ({
      'wave': "url(src/assets/wave_background.svg)",
    })
  },
  plugins: [],
}

