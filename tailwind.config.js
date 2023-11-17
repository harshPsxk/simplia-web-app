/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      height: {
        // Add more custom heights as needed
        '120': '30rem',
        '128': '32rem',
        '130': '46rem',
      },
      blur: {
        xs: '4px',
      },
      fontFamily: {
        'googleSansDisplay': ['Google Sans Display', 'sans'],
        'roboto': ['Roboto', 'sans'],
      },
      colors: {
        // Add your custom color here
        customRed: '#ff0000',
        customRedOne: '#DB3E32',
        customRedTwo: '#F8B3B5',
        customRedHover: '#D66464',

        customGrey: '#555555',
        customGreyOne: '#CBC0CC',
        customGreyTwo: '#BAB9CB',
        hoverGrey: '#999999',

        customPurple: '#800080',
        customPurplehover: '#BE29EC',

        customBorderPurple: '#C874B2',

        customYellow: '#F5D5E0',
        
        customBlue: '#107DAC',
        customBlueHover: '#005073',
        
        mainBackgroundColor: '#FFE4ED'
      }
    }
  },
  plugins: [],
}
