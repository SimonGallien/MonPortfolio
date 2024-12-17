import daisyui from "daisyui"

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/_components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {  
      fontFamily: {
        anta: ['Anta', 'sans-serif'],
        telugu: ['Anek Telugu', 'sans-serif'],
      },
      backgroundImage: {
      'grid-fade': "url('/src/assets/images/backgroundPattern.png')",
      },
    },
  },
  plugins: [
    daisyui,
  ],
  daisyui: {
    themes: [
    "bumblebee",
    "night",
    ],
  },
}

