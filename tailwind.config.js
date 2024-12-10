import daisyui from "daisyui"

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {  
      fontFamily: {
        anta: ['Anta', 'sans-serif'],
        telugu: ['Anek Telugu', 'sans-serif'],
      },
    },
  },
  plugins: [
    daisyui,
  ],
  daisyui: {
    themes: [
    "bumblebee",
    "dim",
    ],
  },
}

