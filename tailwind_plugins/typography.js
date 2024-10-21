const plugin = require('tailwindcss/plugin');

module.exports = plugin(function ({ addBase, theme }) {
  addBase({
    'h1,.h1': { fontSize: theme('fontSize.f-h1'), fontWeight: theme('fontWeight.normal') },
    'h2,.h2': { fontSize: theme('fontSize.f-h2'), fontWeight: theme('fontWeight.normal') },
    'h3,.h3': { fontSize: theme('fontSize.f-h3'), fontWeight: theme('fontWeight.normal') },
    'h4,.h4': { fontSize: theme('fontSize.f-h4'), fontWeight: theme('fontWeight.normal') },
    'h5,.h5': { fontSize: theme('fontSize.f-h5'), fontWeight: theme('fontWeight.normal') },
    'h6,.h6': { fontSize: theme('fontSize.f-h6'), fontWeight: theme('fontWeight.normal') },
    'h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h5, .h6': {
      '@apply text-theme-headings dark:text-themedark-headings leading-[1.2]': {}
    },
    body: {
      '@apply text-base leading-normal text-theme-bodycolor dark:text-themedark-bodycolor bg-theme-bodybg dark:bg-themedark-bodybg': {}
    },
    'b, strong': {
      '@apply font-normal': {}
    },
    '.text-muted': {
      '@apply text-theme-secondarytextcolor dark:text-themedark-secondarytextcolor': {}
    },
    '.material-icons-two-tone': {
      '@apply bg-clip-text': {},
      '-webkit-text-fill-color': 'transparent',
      '&:not([class*="bg-"])':{
        '@apply bg-theme-bodycolor dark:bg-themedark-bodycolor': {}
      }
    }
  });
});
