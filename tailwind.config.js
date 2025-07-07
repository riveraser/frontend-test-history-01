/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        // Colores para "Agregar dato de salud"
        health: {
          "header-bg": "#C4DAFF",
          "header-text": "#123EB0",
          "tabs-bg": "#E5EAF5",
          "tab-inactive-bg": "transparent",
          "tab-inactive-text": "#959FB2",
          "tab-active-bg": "#CFDFFB",
          "tab-active-text": "#0738AC",
          "button-bg": "#F2F2F2",
          "button-text": "#0738AC",
          "icon-bg": "#FFFFFF",
        },
      },
    },
  },
  plugins: [],
};
