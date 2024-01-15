/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'blueGradient': "linear-gradient(269deg, #000360 47.16%, #000360 93.26%)",
        blueCardBackground: "#121457"
      },
    },
  },
  plugins: [],
}

