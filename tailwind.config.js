/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        badgroud: '#121212',
        textprimary: '#ffffff',
        coloracent: '#00BCD4',
        botton: '#FF9800',
        hoverbotton: '#FFC107',
        badgroud2: '#1E1E1E'
      },
      fontFamily: {
        tipography: ['Poppins', "sans-serif"]
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

