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
        'hero-bg': "url('https://pbs.twimg.com/media/FZTnhvwUsAEzCsn.jpg:large')",
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