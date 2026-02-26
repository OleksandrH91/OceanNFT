const swiper = new Swiper('.swiper', {
  speed: 800, // Скорость самой анимации перелета слайда
  
  // Базовые настройки
  slidesPerView: 1,      
  spaceBetween: 20,     
  loop: true,           

  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 36,
    }
  },

  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
});


const menuBtn = document.querySelector('.menu-button__icon');
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.modal__close-btn');

// Открытие
menuBtn.addEventListener('click', (e) => {
  e.stopPropagation(); 
  modal.classList.add('is-open');
});

// Закрытие по крестику (с вашей задержкой 300мс)
closeBtn.addEventListener('click', () => {
  setTimeout(() => {
    modal.classList.remove('is-open');
  }, 300);
});

// Закрытие по клику на фон
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('is-open');
  }
});

const accordions = document.querySelectorAll('.list');

accordions.forEach(acc => {
  acc.addEventListener('click', function() {
    this.classList.toggle('active');
  });
});