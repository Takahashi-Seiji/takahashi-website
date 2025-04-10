const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './public/*.html',
    './app/helpers/**/*.rb',
    './app/javascript/**/*.js',
    './app/views/**/*'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'navy': {
          900: '#0a192f',
          800: '#112240',
          700: '#233554',
        },
        'teal': {
          400: '#64ffda',
        },
      },
      animation: {
        'pattern-move': 'patternMove 20s linear infinite',
      },
      keyframes: {
        patternMove: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '60px 60px' },
        },
      },
    },
  },
  plugins: [],
} 