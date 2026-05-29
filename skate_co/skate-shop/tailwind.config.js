/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'brand-red': '#be0003',
        'brand-dark': '#1a1b1f',
        'brand-bg': '#faf9fe',
        'brand-gray': '#eeedf3',
        'brand-border': '#da3335',
        primary: '#be0003',
        secondary: '#5f5e5e',
        surface: '#faf9fe',
        'surface-container': '#eeedf3',
        'on-surface': '#1a1b1f',
        background: '#faf9fe',
      },
      fontFamily: {
        sans: ['Hanken Grotesk', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Anton', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
        anton: ['Anton', 'sans-serif'],
        hanken: ['Hanken Grotesk', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '0px',
        sm: '0px',
        md: '0px',
        lg: '0px',
        xl: '0px',
        '2xl': '0px',
        full: '9999px',
      },
    },
  },
  plugins: [],
}
