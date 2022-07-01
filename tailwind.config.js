/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '479px',
      md: '760px',
      lg: '978px',
      xl: '1440px'
    },
    extend: {
      colors: {
        brightOrange: 'hsl(12, 88%, 59%)',
        brightOrangeLight: 'hsl(12, 88%, 69%)',
        brightOrangeDamn: 'hsl(12, 88%, 95%)',
        darkBlue: 'hsl(228, 39%, 23%)',
        darkGrayishBlue: 'hsl(227, 12%, 61%)',
        veryDarkBlue: 'hsl(223, 12%, 13%)',
        paleRed: 'hsl(13, 100%, 96%)',
        veryLightGray: 'hsl(0, 0%, 98%)',
      }
    },
  },
  plugins: [],
}
