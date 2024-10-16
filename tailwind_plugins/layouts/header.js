const plugin = require('tailwindcss/plugin');
module.exports = plugin(function ({ addComponents, theme }) {
  addComponents({
    '.pc-header': {
      '@apply fixed ltr:right-0 rtl:left-0 ltr:max-lg:left-0 ltr:lg:left-sidebar-width  rtl:max-lg:right-0 rtl:lg:right-sidebar-width flex h-header-height z-[1025] backdrop-blur-[7px] bg-theme-headerbg dark:bg-themedark-headerbg text-theme-headercolor dark:text-themedark-headercolor transition-all duration-200 ease-in-out':
        {},
      '.pc-head-link': {
        '@apply w-11 h-11 rounded-lg relative flex items-center justify-center mx-1 text-theme-headercolor dark:text-themedark-headercolor after:!content-[""] after:rounded-full after:z-[1] after:absolute after:transition after:inset-0 after:bg-theme-activebg dark:after:bg-themedark-activebg after:scale-0 hover:after:rounded hover:after:scale-100':
          {},
        'i, svg, img ': {
          '@apply relative z-[5] transition': {}
        },
        i: {
          '@apply text-2xl leading-none': {}
        },
        svg: {
          '@apply w-5 h-5': {}
        },
        '&:hover': {
          'i, svg': {
            '@apply scale-[1.08]': {}
          }
        }
      },
      '.pc-h-item.dropdown': {
        '@apply max-sm:static': {},
        '.dropdown-menu': {
          '@apply max-sm:min-w-[calc(100vw_-_30px)] max-sm:!left-[15px] max-sm:!right-[15px] max-sm:!top-full max-w-full': {},
          '&:not(.dropdown-menu-end)': {
            '@apply rtl:!right-0 rtl:!left-auto': {}
          },
        },
        '&.drp-show': {
          '.dropdown-menu': {
            '@apply max-sm:!transform-none': {}
          }
        }
      },
      '.dropdown-menu.drp-search': {
        '@apply sm:min-w-[320px]': {}
      },
      '.dropdown-menu.dropdown-notification': {
        '@apply sm:min-w-[450px]': {},
        '.card': {
          '@apply cursor-pointer shadow-none hover:bg-primary-500/[.05]': {}
        }
      },
      '.dropdown-menu.dropdown-user-profile': {
        '@apply sm:min-w-[290px] p-0': {},
        '.dropdown-item': {
          '@apply flex items-center rounded justify-between': {}
        }
      }
    },
    '[data-pc-header*="preset-"]': {
      '.pc-header': {
        '.pc-head-link': {
          '@apply text-white dark:text-themedark-headercolor after:bg-white/10':{},
        }
      }
    },
    '[data-pc-header="preset-1"]': {
      '.pc-header': {'@apply bg-primary-500': {}}
    },
    '[data-pc-header="preset-2"]': {
      '.pc-header': {'@apply bg-red-500': {}}
    },
    '[data-pc-header="preset-3"]': {
      '.pc-header': {'@apply bg-orange-500': {}}
    },
    '[data-pc-header="preset-4"]': {
      '.pc-header': {'@apply bg-amber-500': {}}
    },
    '[data-pc-header="preset-5"]': {
      '.pc-header': {'@apply bg-yellow-500': {}}
    },
    '[data-pc-header="preset-6"]': {
      '.pc-header': {'@apply bg-lime-500': {}}
    },
    '[data-pc-header="preset-7"]': {
      '.pc-header': {'@apply bg-green-500': {}}
    },
    '[data-pc-header="preset-8"]': {
      '.pc-header': {'@apply bg-emerald-500': {}}
    },
    '[data-pc-header="preset-9"]': {
      '.pc-header': {'@apply bg-teal-500': {}}
    },
    '[data-pc-header="preset-10"]': {
      '.pc-header': {'@apply bg-cyan-500': {}}
    },
    '[data-pc-header="preset-11"]': {
      '.pc-header': {'@apply bg-sky-500': {}}
    },
    '[data-pc-header="preset-12"]': {
      '.pc-header': {'@apply bg-blue-500': {}}
    },
    '[data-pc-header="preset-13"]': {
      '.pc-header': {'@apply bg-indigo-500': {}}
    },
    '[data-pc-header="preset-14"]': {
      '.pc-header': {'@apply bg-violet-500': {}}
    },
    '[data-pc-header="preset-15"]': {
      '.pc-header': {'@apply bg-purple-500': {}}
    },
    '[data-pc-header="preset-16"]': {
      '.pc-header': {'@apply bg-fuchsia-500': {}}
    },
    '[data-pc-header="preset-17"]': {
      '.pc-header': {'@apply bg-pink-500': {}}
    },
    '[data-pc-header="preset-18"]': {
      '.pc-header': {'@apply bg-rose-500': {}}
    }
  });
});