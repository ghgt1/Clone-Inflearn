"use strict";

var mySwiper = new Swiper(".banner .swiper-container", {
  loop: true,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: ".banner .swiper-pagination",
    clickable: true,
  },
  navigation: {
    prevEl: ".banner .swiper-prev",
    nextEl: ".banner .swiper-next",
  },
});
var btn_start = document.querySelector(".swiper-start");
var btn_pause = document.querySelector(".swiper-pause");

btn_start.addEventListener("click", function () {
  mySwiper.autoplay.start();
});
btn_pause.addEventListener("click", function () {
  mySwiper.autoplay.stop();
});
