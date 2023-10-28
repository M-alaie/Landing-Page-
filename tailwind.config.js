/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        vazir:['vazir']
      },
      colors:{
        amber:{
          350:"#daad51"
        },
        pink:{
          750:"#d53569"
        }
      }
    },
  },
  plugins: [],
}

