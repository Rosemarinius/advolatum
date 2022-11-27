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