/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#6366f1',
        secondary: '#8b5cf6'
      },
      borderRadius: {
        'button': '8px'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        pacifico: ['Pacifico', 'cursive']
      }
    },
  },
  plugins: [],
}