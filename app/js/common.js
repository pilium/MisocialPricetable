$(function() {

  $('.arrow-down').click(function() {
    $('html, body').animate({
      scrollTop: $('.s-plan').offset().top
    }, 800);
  });

});