/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {


      backgroundImage: {
        primaryBg: "url('./img/another.jpg')",
      },

      height: {
				"10v": "2vh",
				"20v": "20vh",
				"30v": "30vh",
				"40v": "40vh",
				"50v": "50vh",
				"60v": "60vh",
				"70v": "70vh",
				"80v": "80vh",
				"90v": "90vh",
				"100v": "100vh",
			},

      colors: {
        primary: "#110e0f",
        secondary: "#50A584", 
        lightGray: "#f1f1f1",
        lighterGray: "#ffffff",
        lightDark : "#131011",
      },

      fontSize: {
        huge: 'clamp(2rem, 6vw, 3rem)',
      },

      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        helvetica: ['Monument Extended', 'Helvetica', 'Arial', 'sans-serif']
      }
    },


    container: {
      center: true,
      padding: '4rem',
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1240px',
        '2xl': '1496px',
      },
    }


  },
  plugins: [require("daisyui")],
}
