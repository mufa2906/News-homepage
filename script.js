const heroImage = document.querySelector('.hero-image');
const menuIcon = document.querySelector('.menu-icon');
const navbar = document.querySelector('.navbar');

window.addEventListener('resize', () => {
  if (document.body.clientWidth <= 1024) {
    heroImage.src = './assets/images/image-web-3-mobile.jpg';
    menuIcon.src = './assets/images/icon-menu.svg'
  } else {
    navbar.style.display = 'grid';
    heroImage.src = './assets/images/image-web-3-desktop.jpg';
  }
});

menuIcon.addEventListener('click', () => {
   if (navbar.style.display === 'none') {
    navbar.style.display = 'grid';
    menuIcon.src = './assets/images/icon-menu-close.svg'
  } else {
    navbar.style.display = 'none';
    menuIcon.src = './assets/images/icon-menu.svg'
   }
})