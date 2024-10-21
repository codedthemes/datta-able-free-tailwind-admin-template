const plugin = require('tailwindcss/plugin');
module.exports = plugin(function ({ addComponents, theme }) {
  addComponents({
    '.pc-container': {
      '@apply relative max-lg:ml-0 ltr:lg:ml-sidebar-width rtl:lg:mr-sidebar-width top-header-height min-h-[calc(100vh_-_135px)] transition-all duration-200 ease-in-out':
        {},
      '.pc-content': {
        '@apply max-sm:p-[15px] px-10 pt-5': {}
      }
    },
    '.page-header': {
      '@apply max-sm:px-2.5 mb-6': {},
      '.breadcrumb': {
        '@apply text-[13px]': {}
      }
    },
    '.pc-footer': {
      '@apply relative z-[995] max-lg:ml-0 ltr:lg:ml-sidebar-width rtl:lg:mr-sidebar-width mt-header-height py-[15px] transition-all duration-200 ease-in-out': {}
    },
    '.pc-sidebar': {
      '&.pc-sidebar-hide': {
        '~.pc-header': {
          '@apply ltr:lg:left-0 rtl:lg:right-0': {}
        },
        '~.pc-container, ~.pc-footer': {
          '@apply ltr:lg:ml-0 rtl:lg:mr-0': {}
        }
      }
    },
    '.footer-wrapper, .pc-content': {
      '&.container': {
        '@apply mx-auto md:max-w-[540px] lg:max-w-[720px] lg:max-w-[960px] 2xl:max-w-[1140px]': {}
      },
    },
    '[data-pc-theme_contrast="true"]': {
      'body': {
        '@apply bg-white dark:bg-themedark-bodybg': {}
      },
      '.pc-sidebar': {
        '@apply bg-white dark:bg-themedark-bodybg border-r-0 shadow-[1px_0_3px_0_rgba(219,224,229,1)] dark:border-r dark:shadow-none': {}
      },
      '.card': {
        '@apply shadow-[0px_8px_24px_rgba(27,46,94,0.08)]': {}
      }
    },
    ':not(pre) > code[class*=language-], pre[class*=language-]': {
      '@apply flex m-0 mt-4': {},
      '> code': {
        '@apply w-full': {}
      }
    },
    '.apexcharts-legend-text': {
      '@apply dark:!text-themedark-bodycolor': {}
    },
    'text,.apexcharts-theme-light .apexcharts-menu-icon:hover svg, .apexcharts-theme-light .apexcharts-reset-icon:hover svg, .apexcharts-theme-light .apexcharts-selection-icon:not(.apexcharts-selected):hover svg, .apexcharts-theme-light .apexcharts-zoom-icon:not(.apexcharts-selected):hover svg, .apexcharts-theme-light .apexcharts-zoomin-icon:hover svg, .apexcharts-theme-light .apexcharts-zoomout-icon:hover svg': {
      '@apply dark:!fill-white': {}
    },
    '.apexcharts-gridline,.apexcharts-xaxis-tick,.apexcharts-grid-borders':{
      '@apply dark:hidden': {}
    },
    '.apexcharts-canvas':{
      direction:'ltr'
    },
    '.apexcharts-tooltip.apexcharts-theme-light':{
      '@apply dark:bg-themedark-bodybg dark:border-themedark-border': {},
      '.apexcharts-tooltip-title':{
        '@apply dark:bg-themedark-bodybg dark:border-b-themedark-border': {},
      }
    },
    '.apexcharts-xaxistooltip, .apexcharts-yaxistooltip':{
      '@apply dark:bg-themedark-bodybg dark:border-themedark-border dark:text-themedark-bodycolor': {},
    },
    '.apexcharts-xaxistooltip-bottom':{
      '&:after, &:before':{
        '@apply dark:border-b-themedark-border': {},
      },
    },
    '.apexcharts-menu':{
      '@apply dark:bg-themedark-bodybg dark:border-themedark-border': {},
    },
    '.apexcharts-theme-light .apexcharts-menu-item:hover':{
      '@apply dark:bg-themedark-bodybg': {},
    },
    '.jvm-element':{
      '@apply dark:!fill-themedark-inputbg': {},
    },
    '.vtree li.vtree-leaf a.vtree-leaf-label:hover, .vtree li.vtree-leaf.vtree-selected > a.vtree-leaf-label':{
      '@apply dark:!bg-themedark-inputbg dark:!outline-themedark-border': {},
    }
  });
});
