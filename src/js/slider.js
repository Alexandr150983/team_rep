const swiper = new Swiper('.swiper', {
  // Optional parameters
  //   direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    clickable: true,
    el: '.swiper-pagination',
    dynamicBullets: true,
  },
  autoplay: {
    delay: 2000,
  },
  speed: 900,
  slidesPerView: 1.3,
  spaceBetween: 15,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 4,
        spaceBetween: 40
      }
    }

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});
