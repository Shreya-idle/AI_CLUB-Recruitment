// tailwind.config.js
module.exports = {
  theme: {
    // fontSize:{
    //   sm:['16px'],
    //   lg:['24px'],
    //   xl:['36px'],
    // },
    extend: {
      writingMode: {
        'vertical-rl': 'vertical-rl',
      },
      colors:{
        custonGray: '#6B6B6B',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.writing-mode-vertical-rl': {
          'writing-mode': 'vertical-rl',
        },
        '.rotate-180': {
          transform: 'rotate(180deg)',
        },
      }

      addUtilities(newUtilities, ['responsive', 'hover'])
    },
  ],
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
}
