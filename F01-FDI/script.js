// script.js
document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.swiper-container', {
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
      delay: 5000, // Time between transitions
    },
    effect: 'slide', // or 'fade', 'cube', 'coverflow', 'flip'
    speed: 800, // Duration of the slide transition
    slidesPerView: 1, // Number of slides visible at once
    spaceBetween: 10, // Space between slides
  });
});

window.addEventListener('load', () => {
  const loading = document.getElementById('loading');
  const mainContent = document.getElementById('main-content');

  loading.style.display = 'none'; // Hide loading animation
});