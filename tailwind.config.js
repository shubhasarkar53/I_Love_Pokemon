/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundImage: {
      'hero-bg': "url('/src/assets/image/Hero/hd.jpg')",
    }
  },
  plugins: [],
}

