/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Nunito Sans"', 'sans-serif'],
        lumanosimo: ['"Lumanosimo"', 'cursive'],
      },
      colors: {
        blueCustomColor: '#0c2b3b',
        greenCustomColor: '#068f36',
        greenCustomColor2: '#04c45b',
      },
    },
  },
  plugins: [],
}
