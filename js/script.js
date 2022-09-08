















$('.counter').counterUp({
    delay: 10,
    time: 1000
});




$('.team_text').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    autoplay:true,
    asNavFor: '.team_img'
  });
  $('.team_img').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.team_text',
    dots: true,
    arrows: false,
    centerMode: true,
    focusOnSelect: true,
    centerPadding:"0"
  });

