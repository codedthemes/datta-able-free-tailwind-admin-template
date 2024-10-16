'use strict';
(function () {
  document.getElementsByTagName('html')[0].setAttribute('data-pc-layout', 'compact');

  // add / remove class for body tag (for compact sidebar open/close)
  var sidebar_hide = document.querySelector('#sidebar-hide');
  if (sidebar_hide) {
    sidebar_hide.addEventListener('click', function () {
      if (document.querySelector('body').classList.contains('pc-sidebar-hide')) {
        document.querySelector('body').classList.remove('pc-sidebar-hide');
      } else {
        document.querySelector('body').classList.add('pc-sidebar-hide');
      }
    });
  }

  // add tooltip and open/close it's submenu list for first level icon
  var pc_link_click = document.querySelectorAll('.pc-navbar > li:not(.pc-caption)');
  for (var i = 0; i < pc_link_click.length; i++) {
    // for tooltip
    // new bootstrap.Tooltip(pc_link_click[i], {
    //   trigger: 'hover',
    //   placement: 'right',
    //   title: pc_link_click[i].children[0].children[1].innerHTML
    // });

    pc_link_click[i].addEventListener('click', function (event) {
      document.querySelector('.pc-sidebar').classList.add('pc-compact-submenu-active');
      document.querySelector('body').classList.add('pc-compact-submenu-active');

      var targetElement = event.target;
      if (targetElement.tagName == 'SPAN') {
        targetElement = targetElement.parentNode;
      }

      // pc-trigger remove then body class also remove(if not active any menu link then compact sidebar submenu list close and toggle menu link)
      if (!targetElement.parentNode.classList.contains('pc-trigger')) {
        document.querySelector('.pc-sidebar').classList.remove('pc-compact-submenu-active');
        document.querySelector('body').classList.remove('pc-compact-submenu-active');
      } else {
        document.querySelector('.pc-sidebar').classList.add('pc-compact-submenu-active');
        document.querySelector('body').classList.add('pc-compact-submenu-active');
      }
    });
  }

  // remove active menu item (for compact active class remove when it's url match)
  var elem = document.querySelectorAll('.pc-sidebar .pc-navbar a');
  for (var l = 0; l < elem.length; l++) {
    var pageUrl = window.location.href.split(/[?#]/)[0];
    if (elem[l].href == pageUrl && elem[l].getAttribute('href') != '') {
      elem[l].parentNode.classList.remove('active');

      elem[l].parentNode.parentNode.parentNode.classList.remove('pc-trigger');
      elem[l].parentNode.parentNode.parentNode.classList.remove('active');

      elem[l].parentNode.parentNode.parentNode.parentNode.parentNode.classList.remove('pc-trigger');
    }
  }
})();
