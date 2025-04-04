/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        spinSlow: { // Sizning nomlashingizga mos ravishda o'zgartirdim, CamelCase tavsiya etiladi
          '0%, 100%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(360deg)' }
        }
      },
      animation: {
        spinSlow: 'spinSlow 3s linear infinite' // Keyframes nomi bilan bir xil bo'lishi kerak
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    }
  },
  plugins: [],
};
