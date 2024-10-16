const plugin = require('tailwindcss/plugin');

module.exports = plugin(function ({ addComponents, theme }) {
  addComponents({
    '.offcanvas': {
      '@apply invisible fixed duration-500 transition-all ease-in-out z-[1028] bg-theme-cardbg dark:bg-themedark-cardbg shadow-[0_0_15px_-3px_rgb(0,0,0,0.1)]':
        {},
      '&:not(.show)': {
        '@apply z-[1028]': {}
      },
      '.offcanvas-header': {
        '@apply p-5 flex items-center justify-between': {}
      },
      '.offcanvas-body': {
        '@apply p-5': {},
        '&::-webkit-scrollbar': {
          '@apply w-1.5 opacity-0 hover:opacity-100': {}
        },
        '&::-webkit-scrollbar-track': {
          '@apply bg-transparent': {}
        },
        '&::-webkit-scrollbar-thumb': {
          '@apply bg-secondary-100 hover:bg-secondary-200': {}
        }
      },
      '&.offcanvas-start': {
        '@apply w-[360px] left-[-360px] max-w-full inset-y-0': {},
        '&.show': {
          '@apply left-0': {}
        }
      },
      '&.offcanvas-top': {
        '@apply h-[320px] top-[-320px] inset-x-0': {},
        '&.show': {
          '@apply top-0': {}
        }
      },
      '&.offcanvas-end': {
        '@apply w-[360px] right-[-360px] max-w-full inset-y-0': {},
        '&.show': {
          '@apply right-0': {}
        }
      },
      '&.offcanvas-bottom': {
        '@apply h-[320px] bottom-[-320px] inset-x-0': {},
        '&.show': {
          '@apply bottom-0': {}
        }
      },

      '&.show': {
        '@apply visible': {}
      }
    }
  });
});
