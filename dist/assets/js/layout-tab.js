'use strict';
(function () {
  document.getElementsByTagName('html')[0].setAttribute('data-pc-layout', 'tab');

  // Modify the HTML structure
  var sidebar = document.querySelector('.navbar-wrapper');

  // Get the navbar-content element
  var navContent = document.querySelector('.pc-sidebar >.navbar-wrapper >.navbar-content');
  // Check if the navbar-content element exists
  if (navContent) {
    navContent.style.display = 'none';
  }

  // Create the tab-container div
  var tabContainer = document.createElement('div');
  tabContainer.className = 'tab-container';

  // Create the tab-sidemenu div
  var tabSidemenu = document.createElement('div');
  tabSidemenu.className = 'tab-sidemenu';

  // Create the ul element with class "pc-tab-link"
  var tabLinkUl = document.createElement('ul');
  tabLinkUl.className = 'pc-tab-link nav flex-column';
  tabLinkUl.setAttribute('role', 'tablist');
  tabLinkUl.id = 'pc-layout-submenus';

  // Append the ul to the tab-sidemenu div
  tabSidemenu.appendChild(tabLinkUl);

  // Create the tab-link div
  var tabLinkDiv = document.createElement('div');
  tabLinkDiv.className = 'tab-link';

  // Create the navbar-content div
  var navbarContentDiv = document.createElement('div');
  navbarContentDiv.className = 'navbar-content';

  // Create the tab-content div
  var tabContentDiv = document.createElement('div');
  tabContentDiv.className = 'tab-content';
  tabContentDiv.id = 'pc-layout-tab';

  // Create the ul element with class "pc-navbar"
  var pcNavbarUl = document.createElement('ul');
  pcNavbarUl.className = 'pc-navbar';

  // Append the existing menu list (assuming it's a sibling) to pc-navbar
  var menuList = document.querySelector('.pc-navbar > .menu-list');
  if (menuList) {
    pcNavbarUl.appendChild(menuList.cloneNode(true));
    menuList.parentNode.removeChild(menuList);
  }

  // Append the tab-content and pc-navbar to the navbar-content div
  navbarContentDiv.appendChild(tabContentDiv);
  navbarContentDiv.appendChild(pcNavbarUl);

  // Append the navbar-content div to the tab-link div
  tabLinkDiv.appendChild(navbarContentDiv);

  // Append the tab-sidemenu and tab-link to the tab-container
  tabContainer.appendChild(tabSidemenu);
  tabContainer.appendChild(tabLinkDiv);

  // Append the nav element to the sidebar
  sidebar.appendChild(tabContainer);

  // add tooltip and open/close it's submenu list for first level icon
  // var pc_link_click = document.querySelectorAll('.pc-navbar > li:not(.pc-caption)');
  // for (var i = 0; i < pc_link_click.length; i++) {
  //   new bootstrap.Tooltip(pc_link_click[i], {
  //     trigger: 'hover',
  //     placement: 'right',
  //     title: pc_link_click[i].children[0].children[1].innerHTML
  //   });
  // }
  var pc_tab_menu_list = document.querySelector('.tab-container > .tab-sidemenu > .pc-tab-link');
  var pc_tab_link_list = document.querySelector('.tab-container > .tab-link > .navbar-content > .tab-content');

  if (document.querySelector('.tab-container > .tab-sidemenu')) {
    new SimpleBar(document.querySelector('.tab-container > .tab-sidemenu'));
  }

  if (document.querySelector('.tab-container > .tab-link .navbar-content')) {
    new SimpleBar(document.querySelector('.tab-container > .tab-link .navbar-content'));
  }

  // for all submenu hide
  var elem = document.querySelectorAll('.pc-navbar li .pc-submenu');
  for (var j = 0; j < elem.length; j++) {
    elem[j].style.display = 'none';
  }

  set_tab_menu();

  // set tab menu (Update html structure)
  function set_tab_menu() {
    var pc_menu_list = document.querySelectorAll('.pc-navbar > li.pc-item');
    var pc_new_list = '';
    var flag_count = 0;
    var flag_hit = false;
    var tab_blank_list = '';

    pc_menu_list.forEach(function (item, list_index) {
      if (item.classList.contains('pc-caption')) {
        if (pc_tab_menu_list) {
          flag_count += 1;
          var menuicon = '';
          try {
            menuicon = item.children[1].outerHTML;
          } catch (err) {
            menuicon = item.children[0].innerHTML.charAt(0);
          }
          pc_tab_menu_list.insertAdjacentHTML(
            'beforeend',
            '<li class="nav-item">' +
            '<a class="nav-link" data-pc-toggle="tab" data-pc-target="#pc-tab-' +
            flag_count +
            '" role="tab">' +
            menuicon +
            '</a></li>'
          );
        }
        if (flag_hit === true) {
          if (pc_tab_link_list) {
            var tmp_flag_count = flag_count - 1;
            if (tmp_flag_count == 0) {
              tab_blank_list = pc_new_list;
            }
            if (tmp_flag_count == 1) {
              tab_blank_list += pc_new_list;
              pc_new_list = tab_blank_list;
              tab_blank_list = '';
            }
            pc_tab_link_list.insertAdjacentHTML(
              'beforeend',
              '<div class="tab-pane" id="pc-tab-' +
              tmp_flag_count +
              '" role="tabpanel" aria-labelledby="pc-tab-link-' +
              tmp_flag_count +
              '" tabindex="' +
              tmp_flag_count +
              '"><ul class="pc-navbar">\
              ' +
              pc_new_list +
              '\
              </ul></div>'
            );
            pc_new_list = '';
          }
        }
        item.remove();
      } else {
        pc_new_list += item.outerHTML;
        flag_hit = true;
        item.remove();
        if (list_index + 1 === pc_menu_list.length) {
          if (pc_tab_link_list) {
            var tmp_flag_count = flag_count;
            pc_tab_link_list.insertAdjacentHTML(
              'beforeend',
              '<div class="tab-pane" id="pc-tab-' +
              tmp_flag_count +
              '" role="tabpanel" aria-labelledby="pc-tab-link-' +
              tmp_flag_count +
              '" tabindex="' +
              tmp_flag_count +
              '"><ul class="pc-navbar">\
              ' +
              pc_new_list +
              '\
              </ul></div>'
            );
            pc_new_list = '';
          }
        }
      }
    });

    active_menu();
    menu_click();
  }

  // set active item (when href match with url set active class, it's parent submenu also open and it's parent tab also open)
  function active_menu() {
    // active menu item list start
    var elem = document.querySelectorAll('.pc-sidebar .pc-navbar a');
    for (var l = 0; l < elem.length; l++) {
      var pageUrl = window.location.href.split(/[?#]/)[0];
      if (elem[l].href == pageUrl && elem[l].getAttribute('href') != '') {
        elem[l].parentNode.classList.add('active');

        elem[l].parentNode.parentNode.parentNode.classList.add('pc-trigger');
        elem[l].parentNode.parentNode.parentNode.classList.add('active');
        elem[l].parentNode.parentNode.style.display = 'block';

        elem[l].parentNode.parentNode.parentNode.parentNode.parentNode.classList.add('pc-trigger');
        elem[l].parentNode.parentNode.parentNode.parentNode.style.display = 'block';
        var active_flag = true;
        var cont = elem[l];

        while (active_flag) {
          var cont = cont.parentNode;
          if (cont.classList.contains('tab-pane')) {
            var active_tab = cont.getAttribute('id');
            change_tab('#' + active_tab);
            var active_flag = false;
          }
        }
      }
    }
  }

  // Select all sidebar links with the class 'pc-tab-link' and 'nav-link'
  const pcSidebarLink = document.querySelectorAll('.pc-tab-link .nav-link');

  // Iterate over each link and add a click event listener
  pcSidebarLink.forEach(link => {
    link.addEventListener('click', event => {
      // Prevent the default action of the link
      event.preventDefault();

      // Get the target element of the click event
      let targetElement = event.target;

      // If the clicked element is an icon or certain other elements, traverse up to find the actual link element
      if (['I', 'svg', 'SPAN'].includes(targetElement.tagName)) {
        targetElement = targetElement.parentNode;
      }
      if (targetElement.tagName === 'use') {
        targetElement = targetElement.parentNode.parentNode;
      }

      // Retrieve the ID of the target tab from the data attribute
      const pcTargetTabID = targetElement.getAttribute('data-pc-target');

      // Call the change_tab function to switch to the selected tab
      change_tab(pcTargetTabID);
    });
  });

  function change_tab(tab_name) {
    const pcTargetTabID = tab_name;
    const targetTabElement = document.querySelector(pcTargetTabID);

    if (targetTabElement) {
      // Get all tab contents within the same parent element
      const pcTabContents = targetTabElement.parentElement.querySelectorAll('.tab-pane');

      // Get all sidebar links
      const pcSidebarLink = document.querySelectorAll('.pc-tab-link .nav-link');

      // Hide all tab contents
      pcTabContents.forEach(tabContent => {
        tabContent.classList.add('hidden');
        tabContent.classList.remove('block');
      });

      // Remove 'active' class from all sidebar links and add to the clicked one
      pcSidebarLink.forEach(linkContent => {
        linkContent.classList.remove('active');
        if (linkContent.getAttribute('data-pc-target') === tab_name) {
          linkContent.classList.add('active');
        }
      });

      // Show the target tab content
      targetTabElement.classList.remove('hidden');
      targetTabElement.classList.add('block');
    }
  }

})();
