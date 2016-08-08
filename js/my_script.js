 // === My Script

$(window).scroll(function() {

  var wScroll = $(this).scrollTop();

  if(wScroll > $('.profile-image').offset().top -90) {
    $('body').addClass('full_nav');
  } else {
    $('body').removeClass('full_nav');
  }

});
