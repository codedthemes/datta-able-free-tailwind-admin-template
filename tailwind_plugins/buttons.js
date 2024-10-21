const plugin = require('tailwindcss/plugin');

module.exports = plugin(function ({ addComponents, theme }) {
  addComponents({
    '.btn': {
      '@apply inline-block py-2 px-4 text-center border rounded border-transparent bg-transparent text-base font-medium transition-all duration-200 ease-in-out':
        {},
      '&.disabled': {
        '@apply cursor-default pointer-events-none opacity-75': {}
      },
      '&.btn-lg': {
        '@apply py-3 px-5': {}
      },
      '&.btn-sm': {
        '@apply py-1 px-3': {}
      },
      '&.btn-icon': {
        '@apply w-10 h-10 inline-flex text-lg p-0 items-center justify-center': {},
        '&.avtar-xl': {
          '@apply w-[60px] h-[60px] text-xl': {}
        },
        '&.avtar-l': {
          '@apply w-[50px] h-[50px] text-lg': {}
        },
        '&.avtar-s': {
          '@apply w-[30px] h-[30px] text-base': {}
        },
        '&.avtar-xs': {
          '@apply w-5 h-5 text-sm': {}
        }
      }
    },
    '.btn-pc-default': {
      '&:not(:hover)': {
        '@apply text-theme-bodycolor/70 dark:text-themedark-bodycolor/70': {}
      }
    },
    // dark variant
    '.btn-primary': {
      '@apply bg-primary-500 text-white hover:bg-primary-600 active:bg-primary-700 focus:bg-primary-600': {}
    },
    '.btn-secondary': {
      '@apply bg-secondary-500 text-white hover:bg-secondary-600 active:bg-secondary-700 focus:bg-secondary-600': {}
    },
    '.btn-success': {
      '@apply bg-success-500 text-white hover:bg-success-600 active:bg-success-700 focus:bg-success-600': {}
    },
    '.btn-danger': {
      '@apply bg-danger-500 text-white hover:bg-danger-600 active:bg-danger-700 focus:bg-danger-600': {}
    },
    '.btn-warning': {
      '@apply bg-warning-500 text-white hover:bg-warning-600 active:bg-warning-700 focus:bg-warning-600': {}
    },
    '.btn-info': {
      '@apply bg-info-500 text-white hover:bg-info-600 active:bg-info-700 focus:bg-info-600': {}
    },
    '.btn-dark': {
      '@apply bg-dark-500 text-white hover:bg-dark-600 active:bg-dark-700 focus:bg-dark-600': {}
    },
    '.btn-light': {
      '@apply bg-secondary-50/10 text-dark dark:text-white hover:bg-secondary-50/20 active:bg-secondary-50/30 focus:bg-secondary-50/20': {}
    },
    '.btn-link': {
      '@apply bg-transparent text-primary-500 hover:underline active:bg-primary-50/30 focus:bg-primary-50/20': {}
    },
    // outline variant
    '.btn-outline-primary': {
      '@apply border border-primary bg-primary-500/0 text-primary-500 hover:bg-primary-500 hover:text-white focus:bg-primary-600 focus:text-white':
        {}
    },
    '.btn-outline-secondary': {
      '@apply border border-secondary bg-secondary-500/0 text-secondary-500 hover:bg-secondary-500 hover:text-white focus:bg-secondary-600 focus:text-white':
        {}
    },
    '.btn-outline-success': {
      '@apply border border-success bg-success-500/0 text-success-500 hover:bg-success-500 hover:text-white focus:bg-success-600 focus:text-white':
        {}
    },
    '.btn-outline-danger': {
      '@apply border border-danger bg-danger-500/0 text-danger-500 hover:bg-danger-500 hover:text-white focus:bg-danger-600 focus:text-white':
        {}
    },
    '.btn-outline-warning': {
      '@apply border border-warning bg-warning-500/0 text-warning-500 hover:bg-warning-500 hover:text-white focus:bg-warning-600 focus:text-white':
        {}
    },
    '.btn-outline-info': {
      '@apply border border-info bg-info-500/0 text-info-500 hover:bg-info-500 hover:text-white focus:bg-info-600 focus:text-white': {}
    },
    '.btn-outline-dark': {
      '@apply border border-dark bg-dark-500/0 text-dark-500 dark:text-white/50 dark:border-white/50 hover:bg-dark-500 hover:text-white focus:bg-dark-600 focus:text-white': {}
    },
    // light variant
    '.btn-light-primary': {
      '@apply bg-primary-500/10 dark:bg-primary-500/10 text-primary-500 hover:bg-primary-500 dark:hover:bg-primary-500 hover:text-white focus:bg-primary-600 focus:text-white': {}
    },
    '.btn-light-secondary': {
      '@apply bg-secondary-500/10 dark:bg-secondary-500/10 text-secondary-500 hover:bg-secondary-500 dark:hover:bg-secondary-500 hover:text-white focus:bg-secondary-600 focus:text-white': {}
    },
    '.btn-light-success': {
      '@apply bg-success-500/10 dark:bg-success-500/10 text-success-500 hover:bg-success-500 dark:hover:bg-success-500 hover:text-white focus:bg-success-600 focus:text-white': {}
    },
    '.btn-light-danger': {
      '@apply bg-danger-500/10 dark:bg-danger-500/10 text-danger-500 hover:bg-danger-500 dark:hover:bg-danger-500 hover:text-white focus:bg-danger-600 focus:text-white': {}
    },
    '.btn-light-warning': {
      '@apply bg-warning-500/10 dark:bg-warning-500/10 text-warning-500 hover:bg-warning-500 dark:hover:bg-warning-500 hover:text-white focus:bg-warning-600 focus:text-white': {}
    },
    '.btn-light-info': {
      '@apply bg-info-500/10 dark:bg-info-500/10 text-info-500 hover:bg-info-500 dark:hover:bg-info-500 hover:text-white focus:bg-info-600 focus:text-white': {}
    },
    '.btn-light-dark': {
      '@apply bg-dark-500/10 dark:bg-dark-500/10 text-dark-500 dark:text-white/80 hover:bg-dark-500 dark:hover:bg-dark-500 hover:text-white focus:bg-dark-600 focus:text-white': {}
    },
    // Link variant
    '.btn-link-primary': {
      '@apply bg-transparent text-primary-500 hover:bg-primary-100 focus:bg-primary-100/50': {}
    },
    '.btn-link-secondary': {
      '@apply bg-transparent text-secondary-500 hover:bg-secondary-100/50 focus:bg-secondary-200/50 dark:hover:bg-secondary-500/10 dark:focus:bg-secondary-500/10': {}
    },
    '.btn-link-success': {
      '@apply bg-transparent text-success-500 hover:bg-success-100 focus:bg-success-200': {}
    },
    '.btn-link-danger': {
      '@apply bg-transparent text-danger-500 hover:bg-danger-100 focus:bg-danger-200': {}
    },
    '.btn-link-warning': {
      '@apply bg-transparent text-warning-500 hover:bg-warning-100 focus:bg-warning-200': {}
    },
    '.btn-link-info': {
      '@apply bg-transparent text-info-500 hover:bg-info-100 focus:bg-info-200': {}
    },
    '.btn-link-dark': {
      '@apply bg-transparent text-dark-500 dark:text-white/80 hover:bg-dark-100 dark:hover:bg-dark-500/10  focus:bg-dark-200': {}
    },
    '.introjs-tooltipbuttons': {
      '[role="button"]': {
        '@apply inline-block py-2 px-4 text-center shadow-none border rounded-[20px] border-transparent bg-transparent text-base font-medium transition-all duration-200 ease-in-out':
          {},
        textShadow: 'none',
        '&.introjs-prevbutton': {
          '@apply bg-secondary-500 text-white hover:bg-secondary-600 active:bg-secondary-700 focus:bg-secondary-600': {}
        },
        '&.introjs-nextbutton': {
          '@apply bg-primary-500 text-white hover:bg-primary-600 active:bg-primary-700 focus:bg-primary-600': {}
        }
      }
    }
  });
});
