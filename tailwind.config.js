/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      colors: {
        primary: "#D68F2B",
        "body-bg": "#F6F4F4",
        "text": "#3E3939",
        "dark-mode-bg": "#242424",
      }
    },
  },
  plugins: [],
}

