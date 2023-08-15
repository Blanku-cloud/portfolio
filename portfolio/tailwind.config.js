/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        rubik: ['Rubik', 'sans-serif']
      }
    },
    colors: {
      bg: { black: '#222', grey: '#000' },
      'tainted-white': '#f5f5f5',
      test: '#24c887'
    }
  },
  plugins: []
}
