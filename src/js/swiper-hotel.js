const swiper = new Swiper('.hotel-swiper', {
 setWrapperSize: true,
  uniqueNavElements: true,
  speed: 300,
  spaceBetween: 20,
  slidesPerView: 2,
  breakpoints: {
    768: {
      spaceBetween: 32,
    },
    1440: {
      spaceBetween: 32,
      slidesPerView: 4.833,
      grabCursor: true,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: '.btn--right',
    prevEl: '.btn--left',
  },
});