/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // app router fayllari
    "./pages/**/*.{js,ts,jsx,tsx}", // pages papkasi (agar ishlatilsa)
    "./components/**/*.{js,ts,jsx,tsx}", // components papkasi
  ],
  theme: {
    extend: {},
  },
  plugins: [
  
  ],
};
