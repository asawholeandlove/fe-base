/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00b96b", // Replace with your Ant Design primary color
      },
    },
  },
  plugins: [],
};
