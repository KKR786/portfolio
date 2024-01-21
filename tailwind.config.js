/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'max-lg': {'max': '1023px'}, // Example for maximum width 768px
        // Add more custom breakpoints as needed
      },
    },
  },
  plugins: [],
}
