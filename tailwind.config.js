/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#E6C325",
        black: "#000",
        white: "#fff",
        dark: "#151515",
        light: "#FFFFFF",
        muted: "#929292",
        green: "#2FBE64",
        red: "#F32424",
        border: "#333333",
        input: "#272727",
        warning: "#BF6A02",
      }
    },
  },
  plugins: [],
}