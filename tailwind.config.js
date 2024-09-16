/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brown: {
          100: "#ECE0D1",
          300: "#DBC1AC",
          600: "#967259",
          900: "#634832",
        },
        gray: {
          custom: "#D9D9D9",
        },
      },
      borderRadius: {
        "4xl": "2rem",
      },
      spacing: {
        5.5: "1.375rem",
        7.5: "1.875rem",
        8.5: "2.125rem",
        9.5: "2.375rem",
        25: "6.25rem",
        30: "7.5rem",
        32.5: "8.125rem",
        35.5: "8.875rem",
        50: "12.5rem",
        62: "15.5rem",
        65: "16.25rem",
      },
      letterSpacing: {
        tightest: "-0.065em",
      },
      backgroundImage: {
        headerBgMobile: "url('../images/headerBgMobile.webp')",
        headerBgDesktop: "url('../images/headerBgDesktop.webp')",
        bodyBgDesktop: "url('../images/body-bg.png')",
        categoryRight: "url('../images/categories/category-right.jpg')",
      },
      backgroundSize: {
        full: "100%",
      },
    },
    screens: {
      xs: "390px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        lg: "0.625rem",
      },
    },
    boxShadow: {
      DEFAULT: "0px 1px 10px 0px rgba(0, 0, 0, 0.05)",
    },
    fontFamily: {
      DanaRegular: "Dana Regular", //400
      DanaMedium: "Dana Medium", //500
      DanaDemiBold: "Dana DemiBold", //600
      MorabbaLight: "Morabba Light", //300
      MorabbaMedium: "Morabba Medium", //500
      MorabbaBold: "Morabba Bold", //700
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
      addVariant("child-focus", "& > *:focus");
    },
  ],
};
