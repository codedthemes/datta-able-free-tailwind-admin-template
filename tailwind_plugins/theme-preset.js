import colors from 'tailwindcss/colors';

const generateColorPalette = (color) => ({
  DEFAULT: color[500],
  50: color[50],
  100: color[100],
  200: color[200],
  300: color[300],
  400: color[400],
  500: color[500],
  600: color[600],
  700: color[700],
  800: color[800],
  900: color[900],
  950: color[950]
});

const presets = {
  defaultTheme: {
    extend: {
      colors: {
        primary: {

        }
      }
    }
  },
  themes: [
    {
      name: 'preset-2',
      extend: {
        colors: {
          primary: generateColorPalette(colors.red)
        }
      }
    }   
  ]
};

export default presets;
