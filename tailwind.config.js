module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: "Inter var, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI,Roboto, Helvetica Neue, Arial,Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji",
      mono: "Roboto Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",
    },
    extend: {
      colors: {
        react: "#61DBFB",
        graphql: "#e10098",
        go: "#00FFFF",
        mysql: "#E48E01",
      },
    },
  },
  variants: {
    extend: {
      colors: {
        primary: "#0652DD",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
