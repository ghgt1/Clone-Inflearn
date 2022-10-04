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
const btn_start = document.querySelector(".swiper-start");
const btn_pause = document.querySelector(".swiper-pause");

btn_start.addEventListener("click", function () {
  mySwiper.autoplay.start();
});
btn_pause.addEventListener("click", function () {
  mySwiper.autoplay.stop();
});

const spanEls = document.querySelectorAll(
  ".swiper-pagination .swiper-pagination-bullet"
);
const spanList = [
  "왕초보 모여라 😎",
  "입문 로드맵",
  "Top 50 👑",
  "지식공유신청",
  "신규 강의 🎁",
  "인프런 동료찾기",
  "인프런은 🌱",
];
for (let i = 0; i < spanEls.length; i++) {
  let item = spanEls.item(i);
  item.textContent = spanList[i];
}
