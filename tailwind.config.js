/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "nerko-one": ['"Nerko One"'],
        "roboto": ['Roboto'],
        "dm-mono": ['"DM Mono"', "monospace"]
      }
    },
  },
  plugins: [],
}

