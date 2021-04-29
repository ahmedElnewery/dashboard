module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "primary": '#2B2F55',
        "dark":"#202342",
        "white":"#E5E5E5",
        "secondary":"#01A9F4",
        "light-sec":"#323662",
        "success":"#63F4F7",
        "sky":"#01A9F4",
        "blood":"#EC4165",
        "danger":"#FE7448",
        "lightSuccess":"#e0fdfd",

        "turquoise":"#1EC1C3",
        "light-primary":"#2D325A",
        "dark-primary":"#292D52"
        
        
      },
      fontFamily: {
        helvetica: ["Helvetica Neue"],
        play: ["Playfair Display"]
      },
      height: {
        'table': '47rem',
        
      }
      
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
