/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          10: "#d68f2b4d",
          50: "#d68f2b80",
          100: "#D68F2B",
        },
        grey: {
          10: "#F9F9F9",
        },
        "body-bg": "#F6F4F4",
        text: "#3E3939",
        "dark-mode-bg": "#242424",
      },
    },
  },
  plugins: [],
};
