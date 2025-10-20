/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: { primary: { DEFAULT: '#2563eb', foreground: '#ffffff' }, background: '#f8fafc' },
      boxShadow: { soft: '0 10px 30px rgba(37, 99, 235, .08)' }
    }
  },
  plugins: []
}
