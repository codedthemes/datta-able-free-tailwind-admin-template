import keyframes from './tailwind_plugins/keyframes.js';
import presets from './tailwind_plugins/theme-preset.js';

module.exports = {
  content: ['./src/**/*.{html,js}', './tailwind_plugins/**/*.{html,js}'],
  darkMode: ['class', '[data-pc-theme="dark"]'],
  theme: {
    fontFamily: {
      sans: [
        '"Open Sans", sans-serif',
        {
          fontFeatureSettings: '"salt"'
        }
      ]
    },
    container: {
      center: true,
      padding: '2rem'
    },
    extend: {
      fontSize: {
        sm: '0.75rem',
        base: '0.875rem',
        'f-h1': '48px',
        'f-h2': '44px',
        'f-h3': '26px',
        'f-h4': '20px',
        'f-h5': '18px',
        'f-h6': '14px'
      },
      spacing: {
        'sidebar-width': '264px',
        'header-height': '74px',
        'topbar-height': '60px',

        'sidebar-collapsed-width': '80px',
        'sidebar-collapsed-active-width': '300px',

        'sidebar-tab-width': '75px',
        'sidebar-tab-navbar-width': '320px'
      },
      boxShadow: {
        sidebarshadow: '1px 0 20px 0 #3f4d67',
        lightsidebarshadow: '7px 0 15px 0 rgba(69, 90, 100, 0.09)'
      },
      colors: {
        theme: {
          headings: '#1d2630',
          bodycolor: '#888',
          bodybg: '#f4f7fa',
          border: '#f1f1f1',
          secondarytextcolor: 'rgba(33, 37, 41, 0.75)',

          sidebarbg: '#3f4d67',
          sidebarcolor: '#a9b7d0',
          sidebarcaption: '#e8edf7',

          lightsidebarbg: '#fff',
          lightsidebarcolor: '#3f4d67',
          lightsidebarcaption: '#3f4d67',

          headerbg: 'rgba( 244,247,250, 0.7)',
          headercolor: '#5b6b79',
          activebg: '#f3f5f7',

          horizontalsubmenubg: '#fff',
          horizontalsubmenucolor: '#5b6b79',

          cardbg: '#fff',
          inputbg: '#fff',
          inputborder: '#bec8d0'
        },
        themedark: {
          headings: 'rgba(255, 255, 255, 0.8)',
          bodycolor: '#bfbfbf',
          bodybg: '#212224',
          border: '#393b3f',
          secondarytextcolor: '#748892',

          sidebarbg: '#2b2c2f',
          sidebarcolor: '#a9b7d0',
          sidebarcaption: '#e8edf7',

          lightsidebarcolor: '#a9b7d0',

          headerbg: 'rgba( 33, 34, 36, 0.7)',
          headercolor: '#6f747f',
          activebg: '#282a2c',

          horizontalsubmenubg: '#393b3f',
          horizontalsubmenucolor: '#bfbfbf',

          cardbg: '#2b2c2f',
          inputbg: '#393b3f',
          inputborder: '#46484c'
        },
        primary: {
          DEFAULT: '#04A9F5',
          50: '#B3E6FE',
          100: '#9FE0FD',
          200: '#77D2FD',
          300: '#4EC5FC',
          400: '#26B8FB',
          500: '#04A9F5',
          600: '#0383BE',
          700: '#025D87',
          800: '#01374F',
          900: '#001118',
          950: '#070B0D'
        },
        secondary: {
          DEFAULT: '#5B6B79',
          50: '#BEC6CE',
          100: '#B2BCC5',
          200: '#9BA8B4',
          300: '#8394A2',
          400: '#6D8090',
          500: '#5B6B79',
          600: '#434F59',
          700: '#2B3239',
          800: '#131619',
          900: '#0B0D0F',
          950: '#040506'
        },
        success: {
          DEFAULT: '#1DE9B6',
          50: '#C4F9EC',
          100: '#B2F7E6',
          200: '#8DF4DA',
          300: '#67F0CE',
          400: '#42EDC2',
          500: '#1DE9B6',
          600: '#12BC91',
          700: '#0D896A',
          800: '#085542',
          900: '#03221B',
          950: '#010907'
        },
        danger: {
          DEFAULT: '#F44236',
          50: '#FEE6E4',
          100: '#FCD3D1',
          200: '#FAAFAA',
          300: '#F88B83',
          400: '#F6665D',
          500: '#F44236',
          600: '#E51A0D',
          700: '#B0140A',
          800: '#7B0E07',
          900: '#460804',
          950: '#2B0502'
        },
        warning: {
          DEFAULT: '#F4C22B',
          50: '#FDF4DA',
          100: '#FCEFC6',
          200: '#FAE39F',
          300: '#F8D879',
          400: '#F6CD52',
          500: '#F4C22B',
          600: '#DCA80B',
          700: '#A67F09',
          800: '#715606',
          900: '#3C2D03',
          950: '#211902'
        },
        info: {
          DEFAULT: '#3EBFEA',
          50: '#E4F6FC',
          100: '#D1F0FA',
          200: '#ACE4F6',
          300: '#88D7F2',
          400: '#63CBEE',
          500: '#3EBFEA',
          600: '#18A8D8',
          700: '#1281A6',
          800: '#0D5A73',
          900: '#073241',
          950: '#041F27'
        },
        dark: {
          DEFAULT: '#212529',
          50: '#73818E',
          100: '#6A7783',
          200: '#58626D',
          300: '#454E56',
          400: '#333940',
          500: '#212529',
          600: '#191C1F',
          700: '#121417',
          800: '#0E0F11',
          900: '#090A0B',
          950: '#020303'
        }
      },
      backgroundImage: {
        'theme-bg-1':'linear-gradient(-135deg, #1de9b6 0%, #1dc4e9 100%)',
        'theme-bg-2':'linear-gradient(-135deg, #899fd4 0%, #a389d4 100%)',
        'theme-bg-3':'linear-gradient(207.92deg, #0398f2 11.42%, #38b9e7 106.55%)',
        'checkbox-bg': `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23ffffff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10l3 3l6-6'/%3e%3c/svg%3e")`,
        'radio-bg': `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='2' fill='%23ffffff'/%3e%3c/svg%3e")`,
        'select-bg': `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%231d2630' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e")`,
        'select-bg-dark': `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23bfbfbf' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e")`,
        'switch-bg': `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='rgba%280, 0, 0, 0.25%29'/%3e%3c/svg%3e")`,
        'switch-active-bg': `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23ffffff'/%3e%3c/svg%3e")`,
        'choice-close-btn': `url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjEiIGhlaWdodD0iMjEiIHZpZXdCb3g9IjAgMCAyMSAyMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjRkZGIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0yLjU5Mi4wNDRsMTguMzY0IDE4LjM2NC0yLjU0OCAyLjU0OEwuMDQ0IDIuNTkyeiIvPjxwYXRoIGQ9Ik0wIDE4LjM2NEwxOC4zNjQgMGwyLjU0OCAyLjU0OEwyLjU0OCAyMC45MTJ6Ii8+PC9nPjwvc3ZnPg==)`
      },
      keyframes: keyframes,
    }
  },
  plugins: [
    require('./tailwind_plugins/layouts/header.js'),
    require('./tailwind_plugins/layouts/sidebar.js'),
    require('./tailwind_plugins/layouts/common.js'),
    require('./tailwind_plugins/badge.js'),
    require('./tailwind_plugins/buttons.js'),
    require('./tailwind_plugins/breadcrumb.js'),
    require('./tailwind_plugins/card.js'),
    require('./tailwind_plugins/dropdown.js'),
    require('./tailwind_plugins/forms.js'),
    require('./tailwind_plugins/offcanvas.js'),
    require('./tailwind_plugins/simplebar.js'),
    require('./tailwind_plugins/table.js'),
    require('./tailwind_plugins/typography.js')
  ]
};
