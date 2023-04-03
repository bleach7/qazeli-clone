/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "25px",
    },
    extend: {
      fontFamily: {
        montserrat: ["Montserrat, sans-serif", "system-ui"],
        "cormorant-infant": ["Cormorant Infant, serif", "system-ui"],
      },
    },
  },
  plugins: [],
};
