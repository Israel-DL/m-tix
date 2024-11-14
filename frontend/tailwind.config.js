/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neutralSilver' : '#F5F7FA',
        'neutralDGrey' : '#4D4D4D',
        'brandPrimary' : '#E85A4F',
        'neutralGrey' : '#717171',
      }
    },
  },
  plugins: [],
}

