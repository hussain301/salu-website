/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {
      keyframes: {
        move: {
          '0%': { transform: 'translate(100%, 0)' },
          '100%': { transform: 'translate(-100%, 0)' },
        },
      },
      animation: {
        move: 'move 15s linear infinite',
      },
    },
  },
  plugins: [
    
    require('preline/plugin'),
    
  ],
}
// #F3F4F6
