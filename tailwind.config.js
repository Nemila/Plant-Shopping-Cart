/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#08D9D6",
        dark: "#252A34",
        light: "#EAEAEA",
        danger: "#FF2E63",
      },
    },
  },
  plugins: [],
};
