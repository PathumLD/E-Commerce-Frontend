/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'], // Add the font here
        serif: ['Merriweather', 'serif'], // Example for a serif font
      },
    },
  },
  plugins: [],
}