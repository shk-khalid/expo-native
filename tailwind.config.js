/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [ require("nativewind/preset") ],
  content: [
    "./app/**/*.{js,jsx,ts,tsx}", 
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'practice-purple': '#A78BFA',
        'practice-yellow': '#FDE047',
        'practice-mint': '#86EFAC',
        'practice-pink': '#FDA4AF',
      },
    },
  },
  plugins: [],
}