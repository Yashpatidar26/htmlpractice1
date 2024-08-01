const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    effect: 'fade',
    speed:1500, 

  // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  anime({
    targets: 'header',
    scaleX:[0, 1],
    translateX: [-400, 0],
    opacity: [0, 1],
    easeing:'easeInOutQuart'
  });
  anime({
    targets: '.logo img',
    rotate:360,
    opacity: [0, 1],
    delay:500,
    easeing:'easeInOutQuart'
  });
  anime({
    targets: '.menu li',
    delay: anime.stagger(200, {start: 700}),
    translateY: [50, 0],
    opacity: [0, 1],
    easeing:'easeInOutQuart'
  });
  anime({
    targets: '.slide-right img',
    scale:[1.2, 1],
    delay: anim.stagger(200, {start: 2000, from: 'last'}),
    opacity: [0, 1],
    easeing:'easeInOutQuart'
  });
  anime({
    targets: '.swiper-wrapper .slide-left .element',
    translateY:[50,0],
    delay: anim.stagger(250, {start: 1700}),
    opacity: [0, 1],
    easeing:'easeInOutQuart'
  });
  anime({
    targets: '.swiper-button-prev',
    translateX:[-100,0],
    delay: 3000,
    opacity: [0, 1],
    easeing:'easeInOutQuart'
  });
  anime({
    targets: '.swiper-button-next',
    translateX:[100,0],
    delay: 3000,
    opacity: [0, 1],
    easeing:'easeInOutQuart'
  });