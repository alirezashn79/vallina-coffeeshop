import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";

const swiper = new Swiper(".swiper", {
  modules: [Navigation],
  slidesPerView: 2,
  spaceBetween: 14,
  navigation: {
    enabled: true,
    nextEl: ".swiper-button-next-custom",
    prevEl: ".swiper-button-prev-custom",
  },
  breakpoints: {
    640: {
      slidesPerView: 3,
      spaceBetween: 16,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});
