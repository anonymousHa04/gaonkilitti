/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  // make the default h1 size to 3rem
  theme: {
    extend: {
      fontSize: {
        'h1': '3rem', // Example custom size for h1
      },
    },
  },
  plugins: [],
}

