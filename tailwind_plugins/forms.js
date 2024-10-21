const plugin = require('tailwindcss/plugin');

module.exports = plugin(function ({ addComponents, theme }) {
  addComponents({
    // 0.625rem 1rem
    '.form-control,.datatable-input': {
      '@apply border rounded block text-base py-2.5 px-4 w-full placeholder:text-[#bec8d0] disabled:bg-secondary-200/10 disabled:pointer-events-none focus:shadow-[0_0_0_1px_#ccc] focus:shadow-primary-500/10 dark:focus:shadow-primary-500/10 focus:outline-none focus:border-primary-500 dark:focus:border-primary-500 border-theme-inputborder dark:border-themedark-inputborder bg-theme-inputbg dark:bg-themedark-inputbg':
        {},
      '&[type="file"]': {
        '&::file-selector-button': {
          '@apply py-2.5 px-4 -my-2.5 -mx-4 me-3 bg-secondary-300/10 cursor-pointer border-0 border-r border-r-theme-inputborder dark:border-r-themedark-inputborder shadow-none outline-none':
            {}
        }
      },
      '&.error': {
        '@apply border-danger-500': {}
      },
    },
    '.form-control-plaintext': {
      '@apply rounded block text-base py-2.5 px-4 w-full focus:outline-none placeholder:text-[#bec8d0] disabled:pointer-events-none bg-transparent dark:bg-transparent': {},
    },
    '.form-control-lg': {
      '@apply py-[.775rem] px-[.85rem] text-[1.09375rem] rounded-lg': {}
    },
    '.form-control-sm': {
      '@apply py-[.375rem] px-[.7rem] text-[.765625rem] rounded-sm': {}
    },
    '.form-select, .datatable-selector': {
      '@apply appearance-none bg-[length:16px_12px] ltr:bg-[right_1rem_center] rtl:bg-[left_1rem_center] bg-no-repeat bg-select-bg dark:bg-select-bg-dark border rounded block text-base py-2.5 ltr:pl-4 ltr:pr-8 rtl:pr-4 rtl:pl-8 w-full focus:outline-none focus:shadow-[0_0_0_1px_#ccc] focus:shadow-primary-500 focus:border-primary-500 border-theme-inputborder dark:border-themedark-inputborder bg-theme-inputbg dark:bg-themedark-inputbg':
        {},
      '&.error': {
        '@apply border-danger-500': {}
      },
    },
    '.form-select[multiple], .form-select[size]:not([size="1"]), [multiple].datatable-selector, [size].datatable-selector:not([size="1"])':
    {
      '@apply bg-none pr-3': {}
    },
    '.form-select-lg': {
      '@apply py-[.775rem] ltr:pl-[.85rem] ltr:pr-8 rtl:pr-[.85rem] rtl:pl-8 text-[1.09375rem] rounded-lg': {}
    },
    '.form-select-sm': {
      '@apply py-[.375rem] ltr:pl-[.7rem] ltr:pr-8 rtl:pr-[.7rem] rtl:pl-8 text-[.765625rem] rounded-sm': {}
    },
    '.form-control-color': {
      '@apply w-12 p-[.8rem] h-[calc(1.5em_+_1.6rem_+_2px)]': {},
      '&::-moz-color-swatch, &::-webkit-color-swatch': {
        '@apply !border-0 !rounded': {}
      }
    },
    '.input-group-text': {
      '@apply flex items-center p-[0.625rem_1rem] text-base border border-theme-inputborder dark:border-themedark-inputborder': {}
    },
    '.input-group': {
      '@apply relative flex flex-wrap items-stretch w-full *:rounded-none ltr:first:*:rounded-l ltr:last:*:rounded-r ltr:*:-ml-px ltr:first:*:ml-0 rtl:*:-mr-px rtl:first:*:mr-0 rtl:first:*:rounded-r rtl:last:*:rounded-l':
        {},
      '.form-control, .form-select': {
        '@apply relative flex-auto w-[1%] min-w-0': {}
      }
    },
    '.datepicker-cell': {
      '&.selected': {
        '@apply bg-primary-500 hover:bg-primary-500': {}
      },
      '&.today.focused:not(.selected)': {
        '@apply bg-success-500 hover:bg-success-500': {}
      }
    },
    '.datepicker-view .week': {
      '@apply text-primary-500': {}
    },
    '.form-label': {
      '@apply mb-2 inline-block text-theme-headings dark:text-themedark-headings': {}
    },
    '.col-form-label': {
      '@apply py-[calc(.8rem_+_1px)]': {}
    },
    '.col-form-label-sm': {
      '@apply py-[calc(.375rem_+_1px)]': {}
    },
    '.col-form-label-lg': {
      '@apply py-[calc(.775rem_+_1px)]': {}
    },
    '.form-check-input': {
      '@apply w-[1.25em] h-[1.25em] align-text-bottom appearance-none transition-all bg-contain bg-center bg-no-repeat border border-theme-inputborder dark:border-themedark-inputborder checked:bg-primary-500 checked:border-primary-500 disabled:opacity-50 disabled:pointer-events-none':
        {},

      '&[disabled], &:disabled': {
        '~.form-check-label': {
          '@apply opacity-50 cursor-default': {}
        }
      },
      '&.error': {
        '@apply border-danger-500': {}
      },
      '&[type="checkbox"]': {
        '@apply rounded checked:bg-checkbox-bg': {}
      },
      '&[type="radio"]': {
        '@apply rounded-full checked:bg-radio-bg': {}
      }
    },
    '.form-check.form-switch': {
      '@apply flex items-center gap-2 mb-1': {},
      '.form-check-input': {
        '@apply w-[2em] rounded-full bg-switch-bg bg-left checked:bg-right checked:bg-switch-active-bg': {}
      }
    },
    '.form-range': {
      '@apply w-full h-2 rounded-md appearance-none bg-theme-bodybg dark:bg-themedark-bodybg': {},
      '&::-webkit-slider-thumb': {
        '@apply bg-primary-500 h-4 w-4 rounded-full cursor-pointer appearance-none': {}
      },
      '&:focus::-webkit-slider-thumb': {
        '@apply opacity-90': {}
      }
    },
    '.pc-toggle-noUiSlider': {
      '@apply h-[50px]': {},
      '&.off .noUi-handle': {
        '@apply bg-danger-500 border-danger-500 shadow-none': {}
      }
    },
    '.noUi-target': {
      '@apply bg-theme-bodybg dark:bg-themedark-bodybg dark:border-0 dark:shadow-none': {}
    },
    '.noUi-handle': {
      '@apply shadow-none bg-theme-bodybg dark:bg-themedark-bodybg': {}
    },
    '.CodeMirror, .editor-toolbar': {
      '@apply text-theme-bodycolor dark:text-themedark-bodycolor bg-theme-cardbg dark:bg-themedark-cardbg border-theme-border dark:border-themedark-border': {},
      'a': {
        '@apply !text-theme-bodycolor dark:!text-themedark-bodycolor border-0': {},
        '&.active, &:hover': {
          '@apply !text-theme-bodycolor dark:!text-themedark-bodycolor bg-[rgba(0,0,0,0.1)] dark:bg-[rgba(0,0,0,0.2)]': {},
        }
      },
      'i.separator': {
        '@apply border-r-transparent border-l-theme-border dark:border-l-themedark-border': {}
      }
    },
    '.noUi-connect': {
      '@apply bg-primary-500': {}
    },
    '.switch-handle': {
      '@apply bg-theme-cardbg dark:bg-themedark-cardbg': {}
    },
    '.typeahead': {
      '@apply relative': {},
      '&>ul': {
        '@apply absolute top-full float-left left-0 m-[2px_0_0] p-[5px_-] min-w-[170px] shadow-[0_6px_12px_rgba(0,0,0,.17)] rounded border border-theme-border dark:border-themedark-border bg-theme-cardbg dark:bg-themedark-cardbg':
          {},
        '&>li': {
          '>a': {
            '@apply block leading-normal p-[3px_20px] whitespace-nowrap': {}
          },
          '&.active>a, &.active>a:hover, &>a:hover': {
            '@apply text-white bg-primary-500 no-underline': {}
          }
        }
      }
    },
    '#cke5-inline-demo': {
      '.ck-content': {
        '@apply mb-4 p-4 sm:p-10 bg-theme-cardbg dark:bg-themedark-cardbg border border-theme-border dark:border-themedark-border': {},
        '.image-inline': {
          '@apply float-right ml-[var(--ck-image-style-spacing)] max-w-[50%]': {}
        }
      },
      'header.ck-content': {
        '@apply text-center': {},
        h2: {
          '& + h3': {
            '@apply font-semibold': {}
          }
        }
      },
      '.demo-row': {
        '@apply w-full flex flex-col sm:flex-row': {},
        '.demo-row__half': {
          '@apply w-full sm:w-2/4 px-0 ltr:first:sm:pr-2 ltr:last:sm:pl-2 rtl:first:sm:pl-2 rtl:last:sm:pr-2': {}
        }
      }
    },
    '.dropzone': {
      '@apply mb-5 min-h-[auto] p-5 cursor-pointer rounded border border-2 border-dashed border-theme-inputborder dark:border-themedark-inputborder bg-theme-inputbg dark:bg-themedark-inputbg':
        {}
    },
    '.uppy-Dashboard--modal': {
      '@apply z-[1030]': {},
      '.uppy-Dashboard-overlay': {
        '@apply z-[1030]': {}
      },
      '.uppy-Dashboard-inner': {
        '@apply z-[1031]': {}
      }
    },
    '.error-message': {
      '@apply text-danger-500': {}
    },
    '.datepicker-picker': {
      '@apply bg-theme-cardbg dark:bg-themedark-cardbg': {}
    },
    '.datepicker-controls .btn': {
      '@apply bg-transparent': {}
    },
    '.datepicker-cell.disabled': {
      '@apply text-theme-bodycolor/50 dark:text-themedark-bodycolor/50': {}
    },
    '.datepicker-cell.focused:not(.selected),.datepicker-cell:not(.disabled):hover': {
      '@apply bg-primary-500 text-white': {}
    },
    '.ql-container.ql-snow,.ql-toolbar.ql-snow': {
      '@apply border-theme-inputborder dark:border-themedark-inputborder': {}
    },
    '.ql-snow': {
      '.ql-picker': {
        '@apply text-theme-bodycolor dark:text-themedark-bodycolor': {}
      },
      '.ql-stroke': {
        '@apply stroke-theme-bodycolor dark:stroke-themedark-bodycolor': {}
      }
    }
  });
});
