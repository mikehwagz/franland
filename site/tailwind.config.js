module.exports = {
  presets: [require('@selfaware/tailwind-base')],
  content: [
    './templates/*.jsx',
    './routes/*.jsx',
    './lib/*.{js,jsx}',
    './client/**/*.{js,jsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        xs: '375px',
      },
      colors: {
        linen: '#FAEEE6',
        sky: '#C7D5E0',
        charcoal: '#2F3336',
        melon: '#F0B3AB',
        chestnut: '#BC503F',
        yellow: '#F6DDB2',
        orange: '#DB9111',
        piggy: '#F5E0E8',
        pink: '#E894B5',
      },
      fontFamily: {
        sans: ['General Sans Medium', 'sans-serif'],
        serif: ['Besley', 'serif'],
      },
      letterSpacing: {
        n2: '-0.02em',
      },
      spacing: {
        slope: 'calc(1px * var(--divider))',
      },
      borderWidth: {
        1: '1px',
      },
      borderRadius: {
        20: '2rem',
        50: '5rem',
      },
    },
  },
  plugins: [],
}
