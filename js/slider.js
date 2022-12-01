new Swiper('.ts-slider', {
  loop: true,
  
  pagination: {
  el: '.ts-slider-pagination',
  bulletClass: 'ts-slider-pag-bullet',
  bulletActiveClass: 'ts-slider-pag-bullet--active',
  renderBullet: function(index, className) {
    return '<div class="' + className + '"></div>';
  },
  clickable: true,
},
});


new Swiper('.actual-slider', {
  breakpoints: {
    0: {
      slidesPerView: "auto",
    },
    800: {
      slidesPerView: 3,
      spaceBetween: 25,
    },
    1248: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
    
  }
})
