/** @type {import('tailwindcss').Config} */
export default {
  important: true,
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        grey: {
          50: '#F9FAFB',
          100: '#F2F4F7',
          500: '#667085',
          700: '#344054',

          brightGrey: '#344050',
          darkGrey: 'rgb(49, 64, 86)',
          darkGreyO2: 'rgba(49, 64, 86, 0.20)',
          paleGrey: '#FDFDFF',
        },
        blue: {
          soft: '#6183f0',
          azul: '#2162ff',
          azulO7: 'rgba(33, 98, 255, 0.07)',
          bluewood: '#314155',
          purple: '#7F56D9',
          clear: '#3461FF',
          clearO1: 'rgba(33, 98, 255, 0.1)',
          clearO2: 'rgba(33, 98, 255, 0.20)',
          clearO5: 'rgba(33, 98, 255, 0.50)',
          clearO7: 'rgba(33, 98, 255, 0.02)',

          darkO1: 'rgba(0, 3, 96, 0.1)',
          darkO2: 'rgba(0, 3, 96, 0.2)',
          darkO6: 'rgba(0, 3, 96, 0.6)',
          deepCove: '#05184a',
          persianBlue: '#242AC2',
          darkBlue: '#000360',
          ultramarineBlue: 'rgba(76, 112, 255, 0.28)',
          ultramarineBlueO1: 'rgba(42, 103, 255, 0.1)',
        },
        success: {
          500: '#12B76A',
        },
        light: {
          pureWhite: '#FFFFFF',
          whiteO04: 'rgba(255, 255, 255, 0.04)',
          whiteO1: 'rgba(255, 255, 255, 0.10)',
          whiteO05: 'rgba(255, 255, 255, 0.05)',
          lilac: 'rgba(250, 245, 255, 0.00)',
          magnolia: '#F9F5FF',
        },
        brown: {
          yellowishBrown: '#957100',
        },
        red: {
          brightRed: '#FF0010',
        },
        'navbar-background': 'rgba(105, 105, 105, 0.03)',
        'navbar-text-color': '#FFFFFF',
        'navbar-date-color': 'rgba(105, 105, 105, 0.03)',
        'navbar-icon-bg-color': '#01033752',

        'date-color': '#FFF',
        'date-border': 'rgba(255, 255, 255, 0.10)',
        'date-background': 'rgba(1, 3, 58, 0.32)',

        'menu-background': 'var(--colors-gray-50)',
        'menu-text': '#314155',
        'menu-hover-background': '#F8FAFB',

        'home-hero-gradient-start': 'rgba(0, 0, 0, 0.59)',
        'home-hero-gradient-end': 'rgba(1, 0, 146, 0.59)',
        'home-hero-color': '#FFF',

        'search-icon-background': '#3461FF',

        'medical-button-background': 'rgba(36, 42, 194, 0)',
        'medical-button-on-selected-background': '#242AC2',

        'category-background': 'rgba(33, 98, 255, 0.07)',
        'category-on-selected-background': '#2162FF',
        'card-hover-background': 'var(--colors-white)',
        'recently-added-title-text': '#05184A',
      },

      fontFamily: {
        'dm-sans': ['DM Sans', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      fontSize: {
        xSmall: '12px',
        small: '13px',
        medium: '14px',
        '15px': '15px',
        '16px': '16px',
        '18px': '18px',
        '19px': '19px',
        '23px': '23px',
        '24px': '24px',
        semilarge: '28px',
        '30px': '30px',
        large: '45px',
      },
    },
  },
  plugins: [],
}
