/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      righteous: ['Righteous', 'sans-serif'],
      
    },
    letterSpacing: {
      'extra-tight': '-.075em',
      'medium-wide': '.15em',
      'extra-wide': '.35em',
    },
    extend: {
      backgroundImage: theme => ({
        'hero-bg': "url('https://i0.wp.com/cms.interiorcompany.com/wp-content/uploads/2023/12/ultra-modern-glass-normal-house-front-elevation-design-for-2-floor-building.png?ssl=1')",
      }),
      screens:{
        'lg':{'max':'2030px'},
        'md':{'max':'1080px'},
        'sm':{'max':'500px'}
      },
  },
},
  plugins: [],
}