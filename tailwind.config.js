/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "accent": "#FC4747",
        "dark-blue": "#10141E",
        "violet-blue": "#5A698F",
        "navy-blue": "#161D2F",
        "light": "#ffff"
      },
      fontFamily: {
        "outfit": ["Outfit", "sans-serif"]
      },
    },
  },
  plugins: [],
}