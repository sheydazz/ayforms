/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",      // si usas la carpeta /app
    "./pages/**/*.{js,ts,jsx,tsx}",    // si usas la carpeta /pages
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
