/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        amber: {
          100: '#FFD9C2',
          200: '#FFC099',
          300: '#FFC39E',
          400: '#EF9E6C',
          500: '#CE7842',
          600: '#AF5923',
          700: '#893A09',
          800: '#632600',
          900: '#3B1600',
        },
        brown: {
          100: '#FFE4D5',
          200: '#D4AD98',
          300: '#B18269',
          400: '#8E6048',
          500: '#764328',
          600: '#572A12',
          700: '#351402',
        },
        blue: {
          100: '#8D99A6',
          200: '#66778A',
          300: '#485D74',
          400: '#32475D',
          500: '#1E344D',
          600: '#0F2339',
          700: '#041323',
        },
        'white-rgba': 'rgba(255, 255, 255, 0.12)',
      },
    },
  },
  plugins: [],
};
