/**
=========================================================================
=========================================================================
Template Name: Datta Able - Tailwind Admin Template
Author: CodedThemes
Support: https://codedthemes.support-hub.io/
File: multi-lang.js
Description:  this file will contains snippet code
              about handling language change of the page.
=========================================================================
=========================================================================
*/
'use strict';
const DEFAULT_OPTIONS = {
  flagList: {
    en: 'flag-united-kingdom',
    pl: 'flag-poland',
    ja: 'flag-japan',
    de: 'flag-germany',
  },
  preloadLngs: ['en'],
  fallbackLng: "en",
  loadPath: '../assets/json/locales/{{lng}}.json',
}


class Translator {
  constructor(options = {}) {
    this._options = {...DEFAULT_OPTIONS, ...options}
    this._currentLng = this._options.fallbackLng;

    this._i18nextInit();
    this._listenToLangChange();
  }


  _i18nextInit() {
    i18next
      .use(i18nextHttpBackend)
      .init({
        fallbackLng: this._options.fallbackLng,
        preload: this._options.preloadLngs,
        backend: {
          loadPath: this._options.loadPath,
          stringify: JSON.stringify,
        }
      }).then(() => {
        this._translateAll();
      });
  }

  _listenToLangChange = () => {
    const langSwitchers = document.querySelectorAll('[data-lng]');

    langSwitchers.forEach((langSwitcher) => {
      langSwitcher.addEventListener('click', () => {
        this._currentLng = langSwitcher.getAttribute('data-lng');
        
        i18next.changeLanguage(this._currentLng).then(() => {
          this._translateAll();
        });
      })
    });
  }

  _translateAll = () => {
    const elementsToTranslate = document.querySelectorAll('[data-i18n]');

    elementsToTranslate.forEach((el) => {
      const key = el.dataset.i18n;

      el.innerHTML = i18next.t(key);
    })
  }
}

new Translator