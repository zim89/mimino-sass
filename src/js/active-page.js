const active = document.querySelector('.nav__link--active');
const header = document.querySelector('.header');
const nav = document.querySelector('.nav');
const burger = document.querySelector('.burger');
const logo = document.querySelector('.logo');
const socials = document.querySelector('.socials');
const logoAccent = document.querySelector('.logo span');

document.querySelectorAll('.nav__link').forEach(link => {
  if (link.href === window.location.href) {
    active.classList.remove('nav__link--active');
    link.classList.add('nav__link--active');
  }

  if (window.location.href.includes('index')) {
    logoAccent.style.color = '#d8d7d7';
    const isDarkText = header.classList.contains('header--dark-text');
    if (isDarkText) {
      header.classList.remove('header--dark-text');
    }
    header.classList.add('header--light-text');
  } else {
    logoAccent.style.color = '#121212';
    header.classList.remove('header--light-text');
    header.classList.add('header--dark-text');
  }
});

// nav.addEventListener('click', onNavLinkClick);

// function onNavLinkClick(e) {
//   const target = e.target;

//   if (!target.classList.contains('nav__link')) {
//     return;
//   }
//   e.preventDefault();
//   console.log(window.location.href);
//   console.log(target.href);

//   if (target.href){}

// setActivePage(target);
// }

// function setActivePage(target) {
//   const active = document.querySelector('.nav__link--active');
//   active.classList.remove('nav__link--active');
//   target.classList.add('nav__link--active');
// }
