/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    textColor: {
      'primary': '#3490dc',
      'secondary': '#ffed4a',
      'bg': '#b0b0b6',
      'danger': '#e3342f',
    },
    backgroundColor: {
      'primary': '#3490dc',
      'secondary': '#ffed4a',
      'bg': '#b0b0b6',
      'bgOrange': '#e08c24',
      'danger': '#e3342f',
    },
    gradientColorStops: {
      'primary': '#3490dc',
      'secondary': '#ffed4a',
      'bg': '#b0b0b6',
      'bgOrange': '#e08c24',
      'danger': '#e3342f',
    },
    extend: {},
  },
  plugins: [],
}
