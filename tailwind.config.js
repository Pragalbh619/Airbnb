// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      cd: { max: '1496px' },
      ab: { max: '1400px'},
      xl: { max: '1280px' },
      ef: { max: '1105px' },
      lg: { max: '1027px' },

      md: { max: '960px' },
      gh: { max: '859px'},
      ij: { max: '782px' },
      // kl: { max: '759px' },
      sm: { max: '720px' },
      xs: { max: '440px' },

    },
    extend: {},
  },
  plugins: [],
}