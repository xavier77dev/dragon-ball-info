/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "image-main": "url('/src/assets/background.jpg')",
      },
    },
  },
  plugins: [],
};
