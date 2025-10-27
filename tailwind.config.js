
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}","./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ['ui-serif','Georgia','Cambria','Times New Roman','Times','serif'],
        sans: ['ui-sans-serif','system-ui','Inter','Segoe UI','Roboto','Helvetica','Arial','sans-serif'],
      },
      boxShadow: { soft: '0 10px 30px rgba(0,0,0,.08)' }
    },
  },
  plugins: [],
}
