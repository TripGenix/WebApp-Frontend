/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ffffff',
        secondary: '#1da9cc',
        ternary: '#e8f7fa',
        accent: '#113d47',
        text: '#1c1c1b',
      }
    },
  },
  plugins: [],
}
