$(function() {

  $('.arrow-down').click(function() {
    $('html, body').animate({
      scrollTop: $('.s-plan').offset().top
    }, 800);
  });

});

$('.m-menu').click(function() {
  $('.main-menu').addClass('active');
});
$('.close-menu').click(function() {
  $('.main-menu').removeClass('active');
});
