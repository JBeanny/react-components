/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      primary: {
        // DEFAULT: '#3b82f6',
        DEFAULT: "#f97316",
        // 200: '#EAF6F6',
        200: "#fff7ed",
        300: "#fb923c",
        500: "#85d1f7",
      },
      danger: {
        DEFAULT: "#f43f5e",
        400: "#f87171",
      },

      //not in used yet
      warning: {
        DEFAULT: "#eab308",
        300: "#fde047",
        500: "#eab308",
      },
      white: {
        DEFAULT: "#ffffff", //background
        500: "#eeeeee",
      },
      black: {
        DEFAULT: "#1e1e1e",
      },
      gray: {
        DEFAULT: "#383838", //opacity 0.6
        500: "#73777B",
        200: "#cbd5e1",
      },
      green: {
        DEFAULT: "#ADE792",
      },
    },
    screens: {
      mobile: "280px",
      tablet: "768px",
      desktop: "1248px",
    },
    weight: {
      normal: 400,
      medium: 500,
      semiBold: 600,
      bold: 700,
    },
    boxShadow: {
      sm: "0px 2px 4px 0px rgba(11, 10, 55, 0.15)",
      lg: "0px 8px 20px 0px rgba(18, 16, 99, 0.06)",
    },
    fontSize: {
      xs: ["0.8rem", { lineHeight: "1rem", letterSpacing: "-0.032em" }], // subTitle des content nav (mobile)
      sm: ["1rem", { lineHeight: "1rem", letterSpacing: "-0.032em" }], // subTitle des content nav
      md: ["1.25rem", { lineHeight: "1.5rem", letterSpacing: "-0.03em" }], // title
      lg: ["1.5rem", { lineHeight: "2rem", letterSpacing: "-0.03em" }], //sub header
      xl: ["2rem", { lineHeight: "2.5rem", letterSpacing: "-0.032em" }], //header , other icons
      xxl: ["3rem", { lineHeight: "3.5rem", letterSpacing: "-0.032em" }], // Main icons
    },
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
