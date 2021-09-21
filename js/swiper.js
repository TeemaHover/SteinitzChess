const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  freeMode: true,
  mousewheel:true,
});
const swiper2 = new Swiper('.swiper2', {
  // Optional parameters
  loop:true,
  direction: 'horizontal',
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  
  effect:'coverflow',
  coverflowEffect: {
    rotate: 0,
    slideShadows: false,
  },
});

