/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        mainFont:[
          '"Nunito Sans", Arial, sans-serif'
        ]
      },
      boxShadow: {
        headerShadow: "0px 2px 4px rgba(0, 0, 0, 0.0562443)",
        cardShadow: "0px 0px 7px 2px rgba(0, 0, 0, 0.0294384)",
        searchShadow: "0px 2px 9px rgba(0, 0, 0, 0.0532439)"
      },
      backgroundImage: {
        "lightmoon": 'url("../images/moon.svg")',
        "darkmoon": 'url("../images/white-moon.svg")',
        "lightsearch": 'url("../images/light-search-icon.svg")',
        "darksearch": 'url("../images/dark-search-icon.svg")'
      },
    },
  },
  plugins: [],
}
