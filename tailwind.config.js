/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    './src/assets/css/**/*.css',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        md: '768px',
        lg: '1024px',
        xl: '1280px'
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          md: '1.5rem'
        }
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: '#000',
        white: '#fff',
        gray: {
          lightest: '#f8f8f8',
          lighter: '#e5e5e5',
          light: '#cbcaca',
          DEFAULT: '#9e9e9e',
          dark: '#757575',
          darker: '#424242',
          darkest: '#212121'
        },
        primary: {
          light: '#f55852',
          DEFAULT: '#fafaf5',
          dark: '#b81e18'
        },
        secondary: '#2d4d5f',
        danger: {
          light: '#ffebee',
          DEFAULT: '#f44336',
          dark: '#701317'
        },
        warning: {
          light: '#fff8e1',
          DEFAULT: '#ffc107',
          dark: '#845623'
        },
        info: {
          light: '#e3f2fd',
          DEFAULT: '#2196f3',
          dark: '#003a64'
        },
        success: {
          light: '#e8f5ef',
          DEFAULT: '#1bbc8c',
          dark: '#0c5226'
        },
        youtube: '#ff0000',
        google: '#db4437',
        facebook: '#1978f2',
        telegram: '#08c',
        twitter: '#1da1f2',
        whatsapp: '#25d366',
        line: '#00b900'
      },
      fontSize: {
        xs: ['0.75rem', '150%'],
        sm: ['0.875rem', '150%'],
        base: ['1rem', '150%'],
        lg: ['1rem', '175%'],
        xl: ['1.125rem', '150%'],
        '2xl': ['1.25rem', '150%'],
        '3xl': ['1.5rem', '125%'],
        '4xl': ['1.5rem', '150%'],
        '5xl': ['1.75rem', '125%'],
        '6xl': ['2rem', '125%'],
        '7xl': ['2.25rem', '125%'],
        '8xl': ['2.75rem', '125%'],
        '9xl': ['3rem', '125%']
      },
    }

  },
  plugins: [],
}

