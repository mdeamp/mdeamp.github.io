/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      borderImage: {
        gradient: 'linear-gradient(45deg, #ff0000, #00ff00, #0000ff) 1',
      },
      keyframes: {
        blink: {
          '0%': { opacity: 1 },
          '50%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      animation: {
        blink: 'blink 1s step-start infinite',
      },
    },
  },
  plugins: [],
};
