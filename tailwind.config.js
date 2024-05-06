/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", 
  "./screens/Home/*.{js,jsx,ts,tsx}", 
  "./screens/Negocios/*.{js,jsx,ts,tsx}",
  "./components/**/*.{js,jsx,ts,tsx}",
  './src/**/*.js',],
  
  theme: {
    extend: {},
  },
  plugins: [],
}

