var swiper = new swiper(".slide-content", {
    slidesPerView: 1,
    // spaceBetween: 15,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        // 640: {
        //     slidesPerView: 2,
        // },
      //   640: {
      //       slidesPerView: 3,
      //   },
      //   900: {
      //     slidesPerView: 4,
      // },
    },
  });