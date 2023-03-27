new Swiper('.swiper', {
  slidesPerView: 3,
  loop: true,
  loopedSlides: 2,
  loopAdditionalSlides: 1,
  loopFillGroupWithBlank: true,
  spaceBetween: 21,
  speed: 800,
  autoplay: {
    delay: 4000, 
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    }
  }
});