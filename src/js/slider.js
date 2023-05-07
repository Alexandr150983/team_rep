const swiper = new Swiper('.swiper', {
  // Optional parameters
  //   direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    clickable: true,
    el: '.swiper-pagination',
  },
  slidesPerView: 1.3,
  spaceBetween: 15,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
