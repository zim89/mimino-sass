const swiper = new Swiper('.hotel-swiper', {
 slidesPerView: 1.5,
  spaceBetween: 20,
  breakpoints: {768: {
      
      spaceBetween: 32
    },},
  // Navigation arrows
  navigation: {
    nextEl: '.btn--right',
    prevEl: '.btn--left',
  },
});