/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      colors: {
        "body-bg": "F6F4F4",
        "text": "3E3939",
      }
    },
  },
  plugins: [],
}

