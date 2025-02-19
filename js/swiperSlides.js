var $ = jQuery;
// var swiper = new Swiper(".productsSwiper", {
//     slidesPerView: 3,
//     spaceBetween: 30,
//     freeMode: true,
//     autoplay: {
//       delay: 4000,
//     },
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },
//     breakpoints: {
//         0: {
//           slidesPerView: 1.2,  
//         },
//         768: {
//           slidesPerView: 2,
//           spaceBetween: 50,
//         },
//         1024: {
//           slidesPerView: 3,
//           spaceBetween: 30,
//         },
//       },
// });
// var swiper = new Swiper(".ProductImgSwiper", {
//   effect: "cards",
//   grabCursor: true,
//   autoplay: {
//     delay: 3000,
//   },
// });

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  // centeredSlides: true,
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
    // disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
            0: {
              slidesPerView: 1,  
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          },
});

