/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  darkMode:'class',
  theme: {
    container:{
      center:true,
    },
    backgroundImage:{
      'picture1':"url('/tailwind/public/img/pic1.jpg')",
    },
    borderRadius:{
      'none':'0',
      'sm':'0.12rem',
      DEFAULT:'0.25rem',
      DEFAULT:'4px',
      'md':'0.37rem',
      'lg':'0.45rem',
      'full':'6rem',
      'large':'12px',
    },
    extend: {
      fontFamily:{
        'author': ['Lumanosimo'],
    },
  },
  },
  plugins: [],
}


