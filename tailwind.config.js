/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bgPattern': "url(/public/assets/shared/desktop/bg-pattern-call-to-action.svg)",
        'heroPattern': "url(/public/assets/shared/desktop/bg-pattern-hero-home.svg)"
      },
      screens: {
        tab: "950px"
      }
    },
    
  },
  plugins: [],
}

