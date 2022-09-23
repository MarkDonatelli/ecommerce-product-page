/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [],
  theme: {
    fontFamily: {
      sans: ['Kumbh Sans', 'sans-serif'],
    },
    screens: {
      xs: '375px',
      ...defaultTheme.screens,
    },
    container: {
      padding: '20px',
      center: true,
      screens: {
        md: '1155px',
      },
    },
    extend: {
      colors: {
        orange: 'hsl(26, 100%, 55%)',
        orangePale: 'hsl(25, 100%, 94%)',
        blueDark: 'hsl(220,13%,13%)',
        grayDarkBlue: 'hsl(219, 9%, 45%)',
        grayBlue: 'hsl(220, 14%, 75%)',
        grayLight: 'hsl(223, 64%, 98%)',
      },
    },
  },
  plugins: [],
};
