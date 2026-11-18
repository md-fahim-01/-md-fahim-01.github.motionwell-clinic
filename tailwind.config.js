/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0B1F1C",
        pine: "#123F38",
        pineDeep: "#0C2B27",
        gold: "#C6A15B",
        goldSoft: "#E4C98F",
        cream: "#F7F3EC",
        sand: "#EDE5D8",
      },
      fontFamily: {
        display: ['"Playfair Display"', "Georgia", "serif"],
        body: ['"Manrope"', "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 20px 50px -20px rgba(11,31,28,0.25)",
        card: "0 10px 30px -12px rgba(11,31,28,0.18)",
      },
    },
  },
  plugins: [],
};
