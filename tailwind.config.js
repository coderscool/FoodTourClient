/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      'banner1': "url('/src/assets/imageorange.jpg')",
    },
    backgroundImage: {
      "blue-statistic": "url('/src/assets/blue.jpg')",
      "green-statistic": "url('/src/assets/green.png')",
      "orange-statistic": "url('/src/assets/orange.jpg')",
      "red-statistic": "url('/src/assets/red.jpg')",
      "image-auth": "url('/src/assets/bg-food.jpg')"
    }
  },
  plugins: [],
}