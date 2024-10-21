const plugin = require('tailwindcss/plugin');

module.exports = plugin(function ({ addComponents, theme }) {
  addComponents({
    '.btn-group, .dropdown': {
      '@apply relative': {},
      '.dropdown-toggle': {
        "@apply relative after:content-['\\ea5f'] after:font-['tabler-icons'] after:text-base after:align-bottom after:ml-1": {},
        '&.arrow-none': {
          '@apply after:hidden': {}
        }
      },
      '.dropdown-menu': {
         '@apply absolute transform opacity-0 text-theme-bodycolor dark:text-themedark-bodycolor scale-0 left-0 top-full z-10 origin-top p-2 min-w-48 bg-theme-cardbg dark:bg-themedark-inputbg rounded shadow-[0_4px_24px_0_rgba(62,57,107,.18)]':
          {},
        '&.dropdown-menu-end': {
          '@apply right-0 left-auto': {}
        },
        '.dropdown-item': {
          '@apply flex items-center gap-3 rounded py-2.5 px-2.5 px-[15px] w-full block hover:bg-secondary-100/20': {},
          i: {
            '@apply text-lg leading-none': {}
          },
          svg: {
            '@apply w-[18px] h-[18px]': {}
          }
        }
      },
      '&.drp-show': {
        '.dropdown-menu': {
          '@apply block transform opacity-100 scale-100': {}
        }
      }
    }
  });
});
