/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Dosis", "sans-serif"],
      },
      colors: {
        'midiblue': '#00466C'
      }
    }
  },
  plugins: [
    require('flowbite/plugin')
]
};
