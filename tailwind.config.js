/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Dosis", "sans-serif"],
      },
      colors: {
        'midiblue_dark': '#00466C',
        'midiblue_bright': '#0075B5'
      }
    }
  },
  plugins: [
    require('flowbite/plugin')
]
};
