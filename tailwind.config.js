/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      // padding: "1rem",
      screens: {
        sm: "100%",
        md: "100%",
        lg: "1024px",
        xl: "1280px",
      },
    },
    extend: {
      fontFamily: {
        title: ['"Inria Serif"', "serif"],
        // body: ['"Lato"', "sans-serif"],
      },
      colors: {
        "logo-950": "#451a03",
        "logo-200": "#fde68a",
        "light-bg": "#e8e6e4",
        "custom-white": "#f9f9f9",
        "custom-black": "#190000",
      },
      container: {
        screens: {
          sm: "100%",
          md: "100%",
          lg: "1024px",
          xl: "1280px",
        },
      },
    },
  },
  plugins: [],
};
