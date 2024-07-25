// tailwind.config.js

module.exports = {
   content: ["./app/**/*.{js,jsx,ts,tsx}", "./<custom directory>/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        colors:{
          primary:{
            DEFAULT:"#F1DEAC",
          },
          secondary:{
            DEFAULT: "#131313"
          }
        }
      },
    },
    plugins: [],
  }