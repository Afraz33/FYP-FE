/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    
    extend: {
      fontFamily:{
        DelaGothicOne:['Dela Gothic One', 'cursive'],
        Onest:[ 'Onest', 'cursive'],
      },
      backgroundColor: {
        'FD9841': '#FD9841',
        'FFD666': '#FFD666',
      },

    },
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    
  },
  theme: {
    extend: {
      keyframes: {
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
      },
      animation: {
        slideUp: 'slideUp 0.3s forwards',
      },
    },
  },
},
  plugins: [],
};
