/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./templates/**/*.php"],
  theme: {
    extend: {
      colors: {
        theme: 'var(--color-theme)',
        themeGray: 'var(--color-theme-gray)',
        default: 'var(--color-font)',
        error: 'var(--color-error)',
      },
      fontFamily: {
        noto: ['var(--font-title)', 'serif'],
        raleway: ['var(--font-text)', 'sans-serif'],
        poppins: ['var(--font-poppins)', 'sans-serif'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          lg: "2rem",
          xl: "0.875rem",
        },
      },
    },
  },
  plugins: [],
};
