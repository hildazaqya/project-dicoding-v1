// Scrolling Smooth
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth' // Mengatur scroll menjadi mulus
      });
    }
  });
});

var swiper = new Swiper('.swiper', {
  loop: true,
  slidesPerView: 3,
  dots: true,
  fade: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      // autoplay: true,
      centeredSlides: true,
    },
    800: {
      slidesPerView: 2,
      autoplay: true,
      centeredSlides: true,
    },
    1024: {
      slidesPerView: 3,
      autoplay: true,
      centeredSlides: true
    },
  },
  navigation: {
    nextEl: '.swipe-right',
    prevEl: '.swipe-left',
  },
});

swiper.autoplay.start(); // Memulai autoplay


