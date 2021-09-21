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
const swiperTeachers = new Swiper('.swiperTeachers', {
  // Optional parameters
  loop:true,
  direction: 'horizontal',
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  
  effect:'cards',
  cardsEffect: {
    slideShadows: false,
  },

});
const swiperTeachersContent = new Swiper('.swiperTeachersContent', {
  // Optional parameters
  loop:true,
  direction: 'horizontal',
  
  effect: 'flip',
  flipEffect: {
    slideShadows: false,
  },

});

swiperTeachers.controller.control = swiperTeachersContent
swiperTeachersContent.controller.control = swiperTeachers

const swiperTraining = new Swiper('.swiperTraining', {
  // Optional parameters
  loop:true,
  direction: 'horizontal',
  
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  

});

function slideTo(i){
  swiper.slideTo(i,1000)
}

