/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@relume_io/relume-ui/dist/**/*.{js,ts,jsx,tsx}"
  ],
  presets: [require("@relume_io/relume-tailwind")],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#b91c1c',
          green: '#15803d',
          blue: '#0369a1',
          white: '#FFFFFF',
          gray: '#404040',
          lightGray: '#F0F0F0',
          dark: '#141414',
          black: '#141414',
        },
      },
      fontFamily: {
        heading: ['Heebo', 'sans-serif'],
        body: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}