module.exports = {
  important: true,
  purge: [
    './docs/.vuepress/theme/**/*.vue'
  ],
  theme: {
    extend: {},
  },
  corePlugins: {
  },
  variants: {
    borderWidth: ['first', 'last'],
  },
  plugins: [
    require('@tailwindcss/typography'),
  ]
}
