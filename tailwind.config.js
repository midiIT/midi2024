/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        fda8cf: '#FDA8CF', // Pink background
        f3ce5e: '#F3CE5E', // Yellow background
      },
      animation: {
        clockwise: 'clockwise 1s infinite',
        counterclockwise: 'counterclockwise 2s infinite'
      },
      keyframes: {
        clockwise: {
          '0%, 100%': { top: '-5px', left: '0' },
          '12%': { top: '-2px', left: '2px' },
          '25%': { top: '0', left: '5px' },
          '37%': { top: '2px', left: '2px' },
          '50%': { top: '5px', left: '0' },
          '62%': { top: '2px', left: '-2px' },
          '75%': { top: '0', left: '-5px' },
          '87%': { top: '-2px', left: '-2px' },
        },
        counterclockwise: {
          '0%, 100%': { top: '-5px', right: '0' },
          '12%': { top: '-2px', right: '2px' },
          '25%': { top: '0', right: '5px' },
          '37%': { top: '2px', right: '2px' },
          '50%': { top: '5px', right: '0' },
          '62%': { top: '2px', right: '-2px' },
          '75%': { top: '0', right: '-5px' },
          '87%': { top: '-2px', right: '-2px' },
        }
      },
      boxShadow: {
        text_hover: '0 5px 35px 0px rgba(0,0,0,.1)' // Custom name and value for the box-shadow
      }

    },
  },
  variants: {
    extend: {
      boxShadow: ['hover'], // Enable hover for boxShadow
      // Add other variants as needed
    },
  plugins: [],
},
}
