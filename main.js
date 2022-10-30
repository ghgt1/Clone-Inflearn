"use strict";
// 메인 swiper 배너
const mainSwiper = new Swiper(".banner .swiper-container", {
  loop: true,
  autoplay: {
    disableOnInteraction: false,
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
  slidesPerView: 1,
  centeredSlides: true,
});
// 메인 swiper의 autoplay제어문
const btn_start = document.querySelector(".pagination-container .swiper-start");
const btn_pause = document.querySelector(".pagination-container .swiper-pause");

btn_start.addEventListener("click", function () {
  mainSwiper.autoplay.start();
  btn_start.style.display = "none";
  btn_pause.style.display = "block";
});
btn_pause.addEventListener("click", function () {
  mainSwiper.autoplay.stop();
  btn_start.style.display = "block";
  btn_pause.style.display = "none";
});
// 현재 슬라이드 번호
const spanIndex = document.querySelector(".current-index");

// 움직이기 시작할때 번호 바꿔주기
mainSwiper.on("transitionStart", function () {
  spanIndex.textContent = mainSwiper.realIndex + 1;
});

// pagination bullet 불러오기
const spanEls = document.querySelectorAll(
  ".swiper-pagination .swiper-pagination-bullet"
);
// bullet 내부정보 리스트생성
const spanList = [
  "왕초보 모여라 😎",
  "입문 로드맵",
  "Top 50 👑",
  "지식공유신청",
  "신규 강의 🎁",
  "인프런 동료찾기",
  "인프런은 🌱",
];
// forEach문으로 textcontent에 각각 넣어주기
spanEls.forEach((el, i) => (el.textContent = spanList[i]));

// 무료강의 swiper
const freeLectureSwiper = new Swiper(".free-lecture .swiper-container", {
  navigation: {
    prevEl: ".free-lecture .swiper-prev",
    nextEl: ".free-lecture .swiper-next",
  },
  slidesPerView: 5,
  spaceBetween: 10,
  slidesPerGroup: 5,
});
// 왕초보강의 swiper
const easyLectureSwiper = new Swiper(".easy-lecture .swiper-container", {
  navigation: {
    prevEl: ".easy-lecture .swiper-prev",
    nextEl: ".easy-lecture .swiper-next",
  },
  slidesPerView: 5,
  spaceBetween: 10,
  slidesPerGroup: 5,
});
// 로드맵 swiper
const roadmapLectureSwiper = new Swiper(".roadmap .swiper-container", {
  navigation: {
    prevEl: ".roadmap .swiper-prev",
    nextEl: ".roadmap .swiper-next",
  },
  slidesPerView: 4,
  spaceBetween: 8,
  slidesPerGroup: 4,
});
// 신규강의 swiper
const newLectureSwiper = new Swiper(".new-lecture .swiper-container", {
  navigation: {
    prevEl: ".new-lecture .swiper-prev",
    nextEl: ".new-lecture .swiper-next",
  },
  slidesPerView: 5,
  spaceBetween: 10,
  slidesPerGroup: 5,
});
// 세로 리뷰 swiper
const reviewSwiper = new Swiper(".review-banner .swiper-container", {
  direction: "vertical",
  loop: true,
  autoHeight: true,
  mousewheel: true,
  slidesPerView: 3,
  slidesPerGroup: 1,
  loopAdditionalSlides: 1,
});
// 기부 swiper
const donateSwiper = new Swiper(".donate .swiper-container", {
  pagination: {
    el: ".donate .swiper-pagination",
    clickable: true,
  },
  navigation: {
    prevEl: ".donate .swiper-prev",
    nextEl: ".donate .swiper-next",
  },
  slidesPerView: 1,
  centeredSlides: true,
});
