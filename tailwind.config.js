/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      poppin: ['Poppins', 'sans-serif'],
      montser: ['Montserrat', 'sans-serif'],
    },
    gridTemplateColumns: {
      'fill-auto': 'repeat(auto-fit, minmax(350px, 1fr))',
    },
  },
  plugins: [],
}
