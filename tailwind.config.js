/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html','/src/**/*.{jsx,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'inter': ['inter', 'serif'],
      },
    },
  },
  plugins: [],
}

