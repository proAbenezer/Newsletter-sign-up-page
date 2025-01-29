/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        robotoBold: ["Roboto Bold", "sans-serif"],
      },
      colors: {
        PrimaryTomato: "hsl(4, 100%, 67%)",
        DarkSlateGrey: "hsl(234, 29%, 20%)",
        CharcoalGrey: "hsl(235, 18%, 26%)",
        Grey: "hsl(231, 7%, 60%)",
        White: "hsl(0, 0%, 100%)",
      },
    },
  },
  plugins: [],
};
