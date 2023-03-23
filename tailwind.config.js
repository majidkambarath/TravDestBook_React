/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}",
    "./node_modules/tw-elements/dist/js/**/*.js"
   
],
  theme: {
    fontFamily:{
      'about':['Cormorant Garamond'],
      'slab':['Josefin Slab'],
      'Nanum' : ['Nanum Myeongjo'],
      'Yatra': ['Yatra One'],
      'Ariza':['Dancing Script']
    },
    extend: {},
  },
  plugins: [
    require("tw-elements/dist/plugin")
  ],
}
