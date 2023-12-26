/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'checked' : "url('./pages/Contact/images/forms/checkblue.svg')"  //! Donot delete this line...
      },
      fontFamily: {
        'rota' : "url('./fonts/Rota-Regular.otf')",     //Not working...<<<<<<<<<<<<<<<<<<<<<<<<<<<<
      },
    },
  },
  variants: {
    hidden: ['responsive','hover','active','group','group-active'],
    block: ['responsive','hover','active','group','group-active'],
    border: ['responsive','hover','active'],
    accessibility: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
  },
  plugins: [],
}
