const plugin = require('tailwindcss/plugin');

module.exports = plugin(function ({ addComponents, theme }) {
  addComponents({
    '.simplebar-scrollbar': {
      '@apply absolute ltr:right-px rtl:left-px w-1.5 before:absolute before:bg-slate-500 before:rounded-md before:left-0 before:right-0 before:opacity-0':
        {},
      minHeight: '10px'
    },
    '.simplebar-scrollbar:before': {
      content: `' '`,
      transition: 'opacity 0.2s linear'
    },
    '.simplebar-scrollbar.simplebar-visible:before': {
      opacity: theme('opacity.50'),
      transition: 'opacity 0s linear'
    }
  });
});
