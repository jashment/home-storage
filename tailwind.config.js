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
        'accent': '#ffb74d',
        'text': '#e0e0e0',
        'secondary': '#bdbdbd'
      }
    },
  },
  plugins: [],
}

