/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00AEEF",
        secondary: "#000000",
        textLight: "#EDEDED",
        cardDark: "#111111"
      },
      boxShadow: {
        glow: "0 0 28px rgba(0,174,239,0.35)",
        glowSm: "0 0 16px rgba(0,174,239,0.25)"
      }
    }
  },
  plugins: []
}