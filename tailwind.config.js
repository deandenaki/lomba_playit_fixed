/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [
    require('flowbite/plugin')
],
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'jakarta': ["Plus Jakarta Sans"]
      }
    },
  },
  plugins: [],
}

