/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#0B1F33',
          'navy-light': '#142d47',
          orange: '#F97316',
          'orange-dark': '#EA580C',
          gray: '#6B7280',
          light: '#E5E7EB',
          white: '#FFFFFF',
          tracking: '#3B82F6',
        },
        success: '#16A34A',
        warning: '#F59E0B',
        error: '#DC2626',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
