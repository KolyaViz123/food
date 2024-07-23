/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    // container: {
    //   padding: "2rem",
    //   center: true,
    // },
    extend: {
      fontFamily: {
        danfo: ["Danfo"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
