module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        BaseColor: "rgb(var(--BaseColor)/<alpha-value>)",
        BaseColorbrighter: "rgb(var(--BaseColorbrighter) /<alpha-value>)",
        BaseColorbrightest: "rgb(var(--BaseColorbrightest) /<alpha-value>)",
        MainColor: "rgb(var(--MainColor) /<alpha-value>)",
        SubColor: "rgb(var(--SubColor) /<alpha-value>)",
        TextColor: "rgba(var(--TextColor)/<alpha-value>)",
        AccentColor01: "rgb(var(--AccentColor01) /<alpha-value>)",
      },
      fontSize:{
        Large:'18px',
        Normal:'16px',
        Small:'14.4px',
        Tiny:'12.96px',
      }
    },
    fontFamily: {
      'sans': ['Noto Sans JP', 'sans-serif'],
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}