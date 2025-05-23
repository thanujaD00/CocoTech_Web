/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2e7d32",
        secondary: "#00c853",
        dark: "#1b5e20",
        light: "#f1f8e9",
      },
    },
  },
  plugins: [],
};
