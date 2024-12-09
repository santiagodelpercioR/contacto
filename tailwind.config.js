/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        'rubik':["Rubik", 'sans-serif']
      },
      colors: {
        'green': "hsl(75, 94%, 57%)",
        'white': "hsl(0, 0%, 100%)",
        'grey': {
          700: "hsl(0, 0%, 20%)",
          800: "hsl(0, 0%, 12%)",
          900: "hsl(0, 0%, 8%)"
        },
        'lightblue': "hsl(196, 72%, 49%)",
      },
      height: {
        '128': '32rem',
        '132': '33rem'
      },
      aspectRatio:{
        '9/16': '9/16'
      }

    },
  },
  plugins: [],
}

