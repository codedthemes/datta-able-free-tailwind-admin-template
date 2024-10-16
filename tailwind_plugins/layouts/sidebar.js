const plugin = require('tailwindcss/plugin');

module.exports = plugin(function ({ addComponents, theme }) {
  addComponents({
    '.pc-sidebar': {
      '@apply fixed w-sidebar-width inset-y-0 z-[1026] ltr:max-lg:-left-sidebar-width rtl:max-lg:-right-sidebar-width overflow-hidden shadow-sidebarshadow max-lg:shadow-none dark:shadow-none bg-theme-sidebarbg dark:bg-themedark-sidebarbg transition-all duration-200 ease-in-out':
        {},
      '.navbar-wrapper': {
        '@apply w-sidebar-width bg-inherit': {}
      },
      '.m-header .logo-sm': {
        '@apply hidden': {},
      },
      '.navbar-content': {
        '@apply relative py-2.5 px-0': {},
        height: `calc(100vh - theme(spacing.header-height))`
      },
      '&.pc-sidebar-hide': {
        '@apply lg:w-0 ltr:border-r-0 rtl:border-l-0': {}
      },
      '&.mob-sidebar-active': {
        '@apply ltr:max-lg:left-0 rtl:max-lg:right-0': {},
        '.navbar-wrapper': {
          '@apply relative z-[5] bg-inherit': {}
        }
      },
      '.pc-menu-overlay': {
        '@apply fixed inset-0 backdrop-blur-[3px] bg-[rgba(0,0,0,.15)]': {}
      }
    },
    '.pc-navbar': {
      '.pc-caption': {
        '@apply block px-[23px] pt-6 first:pt-2.5 pb-2 uppercase text-[11px] font-semibold text-theme-sidebarcaption dark:text-themedark-sidebarcaption': {},
        ' svg': {
          '@apply hidden': {}
        }
      },
      '.pc-link': {
        '@apply block px-5 py-2.5 relative text-base text-theme-sidebarcolor dark:text-themedark-sidebarcolor': {},
        '.pc-micon': {
          '@apply inline-block align-middle w-6 h-6 text-center ltr:mr-[15px] rtl:ml-[15px]': {},
          '> svg': {
            '@apply inline-block w-[18px] h-[18px]': {}
          },
          '> i': {
            '@apply text-[18px]': {}
          }
        },
        '.pc-arrow': {
          '@apply inline-block ltr:float-right rtl:float-left relative transition-all after:content-[""] after:absolute after:inset-0': {},
          '> svg': {
            '@apply inline-block w-3.5 h-3.5': {}
          }
        },
        '.pc-badge': {
          '@apply inline-flex items-center justify-center ltr:mr-[5px] rtl:ml-[5px] w-5 h-5 rounded-full text-[10px] leading-none ltr:float-right rtl:float-left bg-primary-500 text-white':
            {}
        }
      },
      '>.pc-item': {
        '@apply relative before:content-[""] before:absolute before:inset-y-0 before:bottom-0 before:w-[3px]': {},
        '>.pc-link': {
          '@apply after:content-[""] after:absolute after:inset-0 after:opacity-10 hover:after:bg-dark-500': {},
        },
        '&.active': {
          '>.pc-link': {
            '@apply text-white after:bg-dark-500': {}
          }
        },
        '&.pc-trigger, &.active': {
          '@apply before:bg-primary-500 bg-[rgba(0,0,0,0.1)]': {},
        },
        '.pc-submenu': {
          '.pc-item': {
            '&.active, &.pc-trigger': {
              '>.pc-link': {
                '@apply font-medium after:bg-primary-500 after:scale-[1.2] after:opacity-100 hover:after:bg-primary-500 hover:after:scale-[1.2]':
                  {}
              }
            }
          },
          '.pc-link': {
            '@apply py-3 pr-[30px] ltr:pl-[60px] rtl:pr-[60px] after:content-[""] after:absolute after:rounded-full after:top-5 ltr:after:left-7 rtl:after:right-7 after:w-[5px] after:h-[5px] after:opacity-0 after:bg-theme-sidebarcolor hover:after:bg-primary-500 hover:after:opacity-100 hover:after:scale-[1.2]':
              {}
          },
          '.pc-submenu': {
            '.pc-link': {
              '@apply ltr:pl-20 ltr:after:left-[62px] rtl:pr-20 rtl:after:right-[62px]': {}
            },
            '.pc-submenu': {
              '.pc-link': {
                '@apply ltr:pl-[95px] ltr:after:left-[79px] rtl:pr-[95px] rtl:after:right-[79px]': {}
              }
            }
          }
        }
      }
    },
    '[data-pc-sidebar-caption="false"]': {
      '.pc-sidebar .pc-caption': {
        '@apply hidden': {}
      }
    },
    '[data-pc-sidebar_theme="true"]': {
      '.pc-sidebar': {
        '@apply bg-theme-lightsidebarbg dark:bg-themedark-sidebarbg shadow-lightsidebarshadow': {},
        '.pc-navbar': {
          '.pc-caption': {
            '@apply text-theme-lightsidebarcaption dark:text-themedark-sidebarcaption': {},
          },
          '.pc-link': {
            '@apply text-theme-lightsidebarcolor dark:text-themedark-sidebarcolor': {},
          },
          '>.pc-item': {
            '&.active': {
              '>.pc-link': {
                '@apply text-theme-lightsidebarcolor after:bg-dark-500': {}
              }
            },
            '&.pc-trigger, &.active': {
              '@apply bg-[rgba(0,0,0,0.04)]': {},
            },
          }
        }
      }
    },
    '[data-pc-navbar*="preset-"]': {
      '.pc-sidebar': { 
        '.pc-caption': {
          '@apply text-white dark:text-themedark-sidebarcaption': {},
        },
        '.pc-link': {
          '@apply text-base text-white/[90] dark:text-themedark-sidebarcolor': {},
        }
      }
    },
    '[data-pc-navbar="preset-1"]': {
      '.pc-sidebar': { '@apply bg-primary-500': {} }
    },
    '[data-pc-navbar="preset-2"]': {
      '.pc-sidebar': { '@apply bg-red-500': {} }
    },
    '[data-pc-navbar="preset-3"]': {
      '.pc-sidebar': { '@apply bg-orange-500': {}}
    },
    '[data-pc-navbar="preset-4"]': {
      '.pc-sidebar': { '@apply bg-amber-500': {}}
    },
    '[data-pc-navbar="preset-5"]': {
      '.pc-sidebar': { '@apply bg-yellow-500': {}}
    },
    '[data-pc-navbar="preset-6"]': {
      '.pc-sidebar': { '@apply bg-lime-500': {}}
    },
    '[data-pc-navbar="preset-7"]': {
      '.pc-sidebar': { '@apply bg-green-500': {}}
    },
    '[data-pc-navbar="preset-8"]': {
      '.pc-sidebar': { '@apply bg-emerald-500': {}}
    },
    '[data-pc-navbar="preset-9"]': {
      '.pc-sidebar': { '@apply bg-teal-500': {}}
    },
    '[data-pc-navbar="preset-10"]': {
      '.pc-sidebar': { '@apply bg-cyan-500': {}}
    },
    '[data-pc-navbar="preset-11"]': {
      '.pc-sidebar': { '@apply bg-sky-500': {}}
    },
    '[data-pc-navbar="preset-12"]': {
      '.pc-sidebar': { '@apply bg-blue-500': {}}
    },
    '[data-pc-navbar="preset-13"]': {
      '.pc-sidebar': { '@apply bg-indigo-500': {}}
    },
    '[data-pc-navbar="preset-14"]': {
      '.pc-sidebar': { '@apply bg-violet-500': {}}
    },
    '[data-pc-navbar="preset-15"]': {
      '.pc-sidebar': { '@apply bg-purple-500': {}}
    },
    '[data-pc-navbar="preset-16"]': {
      '.pc-sidebar': { '@apply bg-fuchsia-500': {}}
    },
    '[data-pc-navbar="preset-17"]': {
      '.pc-sidebar': { '@apply bg-pink-500': {}}
    },
    '[data-pc-navbar="preset-18"]': {
      '.pc-sidebar': { '@apply bg-rose-500': {}}
    },
    // ====== logo color ==========
    '[data-pc-logo="preset-1"]': {
      '.pc-sidebar .m-header': { '@apply bg-primary-500': {} }
    },
    '[data-pc-logo="preset-2"]': {
      '.pc-sidebar .m-header': { '@apply bg-red-500': {} }
    },
    '[data-pc-logo="preset-3"]': {
      '.pc-sidebar .m-header': { '@apply bg-orange-500': {}}
    },
    '[data-pc-logo="preset-4"]': {
      '.pc-sidebar .m-header': { '@apply bg-amber-500': {}}
    },
    '[data-pc-logo="preset-5"]': {
      '.pc-sidebar .m-header': { '@apply bg-yellow-500': {}}
    },
    '[data-pc-logo="preset-6"]': {
      '.pc-sidebar .m-header': { '@apply bg-lime-500': {}}
    },
    '[data-pc-logo="preset-7"]': {
      '.pc-sidebar .m-header': { '@apply bg-green-500': {}}
    },
    '[data-pc-logo="preset-8"]': {
      '.pc-sidebar .m-header': { '@apply bg-emerald-500': {}}
    },
    '[data-pc-logo="preset-9"]': {
      '.pc-sidebar .m-header': { '@apply bg-teal-500': {}}
    },
    '[data-pc-logo="preset-10"]': {
      '.pc-sidebar .m-header': { '@apply bg-cyan-500': {}}
    },
    '[data-pc-logo="preset-11"]': {
      '.pc-sidebar .m-header': { '@apply bg-sky-500': {}}
    },
    '[data-pc-logo="preset-12"]': {
      '.pc-sidebar .m-header': { '@apply bg-blue-500': {}}
    },
    '[data-pc-logo="preset-13"]': {
      '.pc-sidebar .m-header': { '@apply bg-indigo-500': {}}
    },
    '[data-pc-logo="preset-14"]': {
      '.pc-sidebar .m-header': { '@apply bg-violet-500': {}}
    },
    '[data-pc-logo="preset-15"]': {
      '.pc-sidebar .m-header': { '@apply bg-purple-500': {}}
    },
    '[data-pc-logo="preset-16"]': {
      '.pc-sidebar .m-header': { '@apply bg-fuchsia-500': {}}
    },
    '[data-pc-logo="preset-17"]': {
      '.pc-sidebar .m-header': { '@apply bg-pink-500': {}}
    },
    '[data-pc-logo="preset-18"]': {
      '.pc-sidebar .m-header': { '@apply bg-rose-500': {}}
    },
    // ===========   caption    ==========
   '[data-pc-caption="preset-1"]': {
      '.pc-sidebar .pc-caption': { '@apply text-primary-500': {} }
    },
    '[data-pc-caption="preset-2"]': {
      '.pc-sidebar .pc-caption': { '@apply text-red-500': {} }
    },
    '[data-pc-caption="preset-3"]': {
      '.pc-sidebar .pc-caption': { '@apply text-orange-500': {}}
    },
    '[data-pc-caption="preset-4"]': {
      '.pc-sidebar .pc-caption': { '@apply text-amber-500': {}}
    },
    '[data-pc-caption="preset-5"]': {
      '.pc-sidebar .pc-caption': { '@apply text-yellow-500': {}}
    },
    '[data-pc-caption="preset-6"]': {
      '.pc-sidebar .pc-caption': { '@apply text-lime-500': {}}
    },
    '[data-pc-caption="preset-7"]': {
      '.pc-sidebar .pc-caption': { '@apply text-green-500': {}}
    },
    '[data-pc-caption="preset-8"]': {
      '.pc-sidebar .pc-caption': { '@apply text-emerald-500': {}}
    },
    '[data-pc-caption="preset-9"]': {
      '.pc-sidebar .pc-caption': { '@apply text-teal-500': {}}
    },
    '[data-pc-caption="preset-10"]': {
      '.pc-sidebar .pc-caption': { '@apply text-cyan-500': {}}
    },
    '[data-pc-caption="preset-11"]': {
      '.pc-sidebar .pc-caption': { '@apply text-sky-500': {}}
    },
    '[data-pc-caption="preset-12"]': {
      '.pc-sidebar .pc-caption': { '@apply text-blue-500': {}}
    },
    '[data-pc-caption="preset-13"]': {
      '.pc-sidebar .pc-caption': { '@apply text-indigo-500': {}}
    },
    '[data-pc-caption="preset-14"]': {
      '.pc-sidebar .pc-caption': { '@apply text-violet-500': {}}
    },
    '[data-pc-caption="preset-15"]': {
      '.pc-sidebar .pc-caption': { '@apply text-purple-500': {}}
    },
    '[data-pc-caption="preset-16"]': {
      '.pc-sidebar .pc-caption': { '@apply text-fuchsia-500': {}}
    },
    '[data-pc-caption="preset-17"]': {
      '.pc-sidebar .pc-caption': { '@apply text-pink-500': {}}
    },
    '[data-pc-caption="preset-18"]': {
      '.pc-sidebar .pc-caption': { '@apply text-rose-500': {}}
    },
    // =======  Navbar Image  =======
    '[data-pc-navimg="preset-1"]': {
      '.pc-sidebar': { '@apply bg-theme-sidebarbg/40 bg-[url("../images/layout/navbar-img-1.jpg")]': {}}
    },
    '[data-pc-navimg="preset-2"]': {
      '.pc-sidebar': { '@apply bg-theme-sidebarbg/40 bg-[url("../images/layout/navbar-img-2.jpg")]': {}}
    },
    '[data-pc-navimg="preset-3"]': {
      '.pc-sidebar': { '@apply bg-theme-sidebarbg/40 bg-[url("../images/layout/navbar-img-3.jpg")]': {}}
    },
    '[data-pc-navimg="preset-4"]': {
      '.pc-sidebar': { '@apply bg-theme-sidebarbg/40 bg-[url("../images/layout/navbar-img-4.jpg")]': {}}
    },
    '[data-pc-navimg="preset-5"]': {
      '.pc-sidebar': { '@apply bg-theme-sidebarbg/40 bg-[url("../images/layout/navbar-img-5.jpg")]': {}}
    },
    '[data-pc-navimg="preset-6"]': {
      '.pc-sidebar': { '@apply bg-theme-sidebarbg/40 bg-[url("../images/layout/navbar-img-6.jpg")]': {}}
    },
    // =======  Sidebar Dropdown icon  =======
    '[data-pc-drp-menu-icon="preset-1"]': {
      '.pc-sidebar .pc-arrow > i::before': { '@apply content-["\\ea61"]': {}}
    },
    '[data-pc-drp-menu-icon="preset-2"]': {
      '.pc-sidebar .pc-arrow > i::before': { '@apply content-["\\ea65"]': {}}
    },
    '[data-pc-drp-menu-icon="preset-3"]': {
      '.pc-sidebar .pc-arrow > i::before': { '@apply content-["\\eb5f"]': {}}
    },
    '[data-pc-drp-menu-icon="preset-4"]': {
      '.pc-sidebar .pc-arrow > i::before': { '@apply content-["\\ea69"]': {}}
    },
    '[data-pc-drp-menu-icon="preset-5"]': {
      '.pc-sidebar .pc-arrow > i::before': { '@apply content-["\\eb0b"]': {}}
    },
    // =======  Sidebar Dropdown menu link icon  =======
    '[data-pc-drp-menu-link-icon*="preset-"]': {
        '.pc-sidebar .pc-navbar > .pc-item:not(.pc-caption) .pc-submenu .pc-item':{
          '> .pc-link:after':{
            '@apply !font-["tabler-icons"] transform-none bg-transparent w-auto h-auto top-[13px] opacity-0': {}
          },
          '&.active,&:hover':{
            '> .pc-link:after':{
              '@apply opacity-100': {}
            },
          }
        }
    },
    '[data-pc-drp-menu-link-icon="preset-1"]': {
      '.pc-sidebar .pc-navbar > .pc-item:not(.pc-caption) .pc-submenu .pc-item > .pc-link:after':{ '@apply content-[""]': {}}
    },
    '[data-pc-drp-menu-link-icon="preset-2"]': {
      '.pc-sidebar .pc-navbar > .pc-item:not(.pc-caption) .pc-submenu .pc-item > .pc-link:after':{ '@apply content-["\\ea1c"]': {}}
    },
    '[data-pc-drp-menu-link-icon="preset-3"]': {
      '.pc-sidebar .pc-navbar > .pc-item:not(.pc-caption) .pc-submenu .pc-item > .pc-link:after':{ '@apply content-["\\ea61"]': {}}
    },
    '[data-pc-drp-menu-link-icon="preset-4"]': {
      '.pc-sidebar .pc-navbar > .pc-item:not(.pc-caption) .pc-submenu .pc-item > .pc-link:after':{ '@apply content-["\\ea65"]': {}}
    },
    '[data-pc-drp-menu-link-icon="preset-5"]': {
      '.pc-sidebar .pc-navbar > .pc-item:not(.pc-caption) .pc-submenu .pc-item > .pc-link:after':{ '@apply content-["\\ea7d"]': {}}
    },
    '[data-pc-drp-menu-link-icon="preset-6"]': {
      '.pc-sidebar .pc-navbar > .pc-item:not(.pc-caption) .pc-submenu .pc-item > .pc-link:after':{ '@apply content-["\\eaf2"]': {}}
    }, 
  });
});
