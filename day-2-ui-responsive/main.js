let navItems = document.querySelectorAll('.nav-item');
let navMenu = document.querySelector('.nav-menu');
let navIcon = document.querySelector('.nav-icon');
navItems.forEach((navItem) => {
  navItem.onclick = function (e) {
    navMenu.style.left = '-500px';
  };
});

navIcon.onclick = function (e) {
  navMenu.style.left = '0';
};
