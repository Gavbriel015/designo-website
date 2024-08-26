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
        'heroPattern': "url(/public/assets/shared/desktop/bg-pattern-hero-home.svg)",
        'bgPatternCircle' : "url(/public/assets/shared/desktop/bg-pattern-small-circle.svg)",
        'patternTwoCircles' : "url(/public/assets/shared/desktop/bg-pattern-two-circles.svg)"
      },
      screens: {
        mob: "679px",
        tab: "950px",
        xx: "799px",
        
      }
    },
    
  },
  plugins: [],
}

