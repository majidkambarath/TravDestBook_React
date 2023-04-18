/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}",
    "./node_modules/tw-elements/dist/js/**/*.js",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
   
],
  theme: {
    fontFamily:{
      'about':['Cormorant Garamond'],
      'slab':['Josefin Slab'],
      'Nanum' : ['Nanum Myeongjo'],
      'Yatra': ['Yatra One'],
      'Ariza':['Dancing Script'],
      'Asap':['Poppins']
    },
    extend: {},
  },
  plugins: [
    require("tw-elements/dist/plugin")
  ],
}
