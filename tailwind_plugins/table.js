const plugin = require('tailwindcss/plugin');

module.exports = plugin(function ({ addComponents }) {
  addComponents({
    '.table-responsive': {
      '@apply overflow-x-auto': {}
    },
    '.table': {
      '@apply w-full border-theme-border dark:border-themedark-border mb-4 align-top': {},
      '> :not(caption) > * > *': {
        '@apply p-[.7rem_.75rem] whitespace-nowrap': {}
      },
      thead: {
        '@apply align-bottom bg-[rgba(248,249,250,0.5)] dark:bg-[#46484c]': {},
        th: {
          '@apply p-[.9rem_.75rem] text-[13px] align-middle uppercase ltr:text-left rtl:text-right border-y border-y-theme-border dark:border-y-themedark-border text-theme-headings dark:text-themedark-headings':
            {}
        }
      },
      '&:not(:last-child)>:last-child>*': {
        '@apply border-t border-t-theme-border dark:border-t-themedark-border': {}
      },
      'td, th': {
        '@apply !align-middle border-b-0 border-t border-t-theme-border dark:border-t-themedark-border': {}
      },
      '&.table-hover': {
        tbody: {
          tr: {
            '@apply hover:!bg-[rgba(0,0,0,.04)]': {}
          }
        }
      },
      '&.table-striped': {
        tbody: {
          tr: {
            '@apply odd:bg-secondary-300/10': {}
          }
        }
      },
      '&.table-dark': {
        '@apply bg-themedark-cardbg text-white': {},
        tbody: {
          tr: {
            td: {
              '@apply border-b-themedark-border': {}
            }
          }
        }
      },
      '&.table-xl': {
        'th, td': {
          '@apply p-[1.25rem_.8rem]': {}
        }
      },
      '&.table-lg': {
        'th, td': {
          '@apply p-[.9rem_.8rem]': {}
        }
      },
      '&.table-sm': {
        'th, td': {
          '@apply p-[.6rem_.8rem]': {}
        }
      },
      '&.table-xs': {
        'th, td': {
          '@apply p-[.4rem_.8rem]': {}
        }
      },
      '&.table-bordered': {
        'th, td': {
          '@apply border border-theme-border dark:border-themedark-border': {}
        }
      },
      '&.table-borderless': {
        'th, td': {
          '@apply !border-0': {}
        }
      }
    },
    '.datatable-table > thead > tr > th': {
      '@apply ltr:text-left rtl:text-right': {}
    },
    '.datatable-top': {
      '@apply flex max-sm:flex-col max-sm:items-start items-center justify-between after:hidden': {}
    },
    '.datatable-sorter': {
      '@apply ltr:pr-4 rtl:pl-4': {},
      '&:before, &:after': {
        '@apply ltr:right-1 rtl:left-1 rtl:right-auto': {}
      },
      '&:before': {
        '@apply border-t-theme-bodycolor dark:border-t-themedark-bodycolor': {}
      },
      '&:after': {
        '@apply border-b-theme-bodycolor dark:border-b-themedark-bodycolor': {}
      }
    },
    '.datatable-wrapper': {
      '.datatable-container': {
        '@apply overflow-x-auto !border-b-0': {}
      },
    },
    '.datatable-dropdown': {
      '@apply mb-1': {},
      label: {
        '@apply flex items-center whitespace-nowrap w-[230px]': {},
        select: {
          '@apply ltr:ml-0 ltr:mr-2 rtl:mr-0 rtl:ml-2': {}
        }
      }
    },
    '.datatable-pagination': {
      'a,button': {
        '&:focus, &:hover': {
          '@apply text-theme-headings dark:text-themedark-headings bg-theme-bodybg dark:bg-themedark-bodybg': {}
        }
      },
      '.datatable-active': {
        'a,button': {
          '@apply text-theme-headings dark:text-themedark-headings bg-theme-bodybg dark:bg-themedark-bodybg': {},
          '&:focus, &:hover': {
            '@apply text-theme-headings dark:text-themedark-headings bg-theme-bodybg dark:bg-themedark-bodybg': {}
          }
        }
      }
    },
    '.dt-container>div.row': {
      '&.justify-content-between': {
        '@apply flex items-center justify-between flex-col md:flex-row max-md:text-center max-md:*:mx-auto max-md:*:mb-2': {}
      },
      '&.mt-2': {
        '@apply !my-2': {}
      }
    },
    'div.dt-container div.dt-search input':{
      '@apply ltr:mr-1 rtl:mr-1': {}
    },
    'div.dt-container div.dt-length select':{
      '@apply w-20': {}
    },
    'table.dataTable thead>tr>':{
      th:{
        '@apply ltr:text-left rtl:text-right ltr:pr-8 rtl:!pl-8 rtl:!pr-[.75rem]': {},
        '.dt-column-order':{
          '@apply ltr:!right-3 rtl:!left-3 rtl:!right-auto': {},
        }
      }
    },
    '.dt-search': {
        '@apply mb-2': {}
      },
    '.dt-buttons': {
      '@apply mb-1': {},  
      '&~.dt-search': {
        '@apply mb-4': {}
      },
    },
    'div.dt-container div.dt-paging ul.pagination, .dt-paging .pagination': {
      '@apply flex my-2 *:*:inline-block *:*:px-3 *:*:py-1.5 first:*:rounded-l-lg last:*:rounded-r-lg *:border *:border-theme-border *:dark:border-themedark-border hover:*:bg-secondary-300/10':
        {},
      '.active>.page-link, .page-link.active': {
        '@apply bg-primary-500 text-white border-primary-500': {}
      }
    },
    'div.dt-scroll-body': {
      '@apply border-b-0': {}
    },
    '.dtfh-floatingparent': {
      '&.dtfh-floatingparent-head': {
        '@apply !top-header-height bg-theme-cardbg dark:bg-themedark-cardbg': {}
      },
      '&.dtfh-floatingparent-foot': {
        '@apply bg-theme-cardbg dark:bg-themedark-cardbg': {}
      }
    },
    'table.dataTable':{
      'tbody tr':{
        '>.dtfc-fixed-start, >.dtfc-fixed-end':{
          '@apply bg-theme-cardbg dark:bg-themedark-cardbg':{}
        }
      },
      'thead, tfoot':{
        'tr':{
          '>.dtfc-fixed-start,>.dtfc-fixed-end':{
            '@apply bg-theme-cardbg dark:bg-themedark-cardbg':{}
          }
        }
      }
    },
    '.table-card .card-body, .table-body.card-body ': {
      '@apply px-0 pt-0': {},
      '.datatable-top, .datatable-bottom': {
        '@apply px-5 sm:px-[25px]': {}
      },
      '.table': {
        '> thead > tr > th': {
          '@apply border-t-0': {}
        },
        tr: {
          'td, th': {
            '@apply ltr:first:pl-5 ltr:first:sm:pl-[25px] ltr:last:pr-5 ltr:last:sm:pr-[25px] rtl:first:pr-5 rtl:first:sm:pr-[25px] rtl:last:pl-5 rtl:last:sm:pl-[25px]': {}
          }
        }
      }
    }
  });
});
