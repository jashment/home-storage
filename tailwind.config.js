/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main': '#e0f2f1',
        'secondary': '#ffb74d'
      }
    },
  },
  plugins: [],
}

