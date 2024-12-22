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
      'grid-fade': "url('/images/backgroundPattern.webp')",
      },
    },
  },
  plugins: [
    daisyui,
    function({ addUtilities }) {
      addUtilities({
        '.mask-fade': {
          '-webkit-mask-image': 'radial-gradient(circle, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 100%)',
          'mask-image': 'radial-gradient(circle, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 90%)',
          '-webkit-mask-repeat': 'no-repeat',
          'mask-repeat': 'no-repeat',
          '-webkit-mask-position': 'center',
          'mask-position': 'center',
        },
      });
    },
  ],
  daisyui: {
    themes: [
    "bumblebee",
    "night",
    ],
  },
}

