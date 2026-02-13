const swiper = new Swiper('.swiper', {
  speed: 800, // Скорость самой анимации перелета слайда
  
  // Базовые настройки
  slidesPerView: 1.1,      
  spaceBetween: 20,     
  loop: true,           

  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 40,
    }
  },

  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
});