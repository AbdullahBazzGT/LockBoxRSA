/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    textColor: {
      Gray100: "#F3F4F6",
      Gray600: "#4B5563",
    },
    backgroundColor: {
      Gray400: "#9CA3AF",
      Gray500: "#6B7280",
    },
    gradientColorStops: {
      Blue600: "#3B82F6",
      Black: "#000000",
    },
    extend: {},
  },
  plugins: [],
};
