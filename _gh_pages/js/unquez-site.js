/**
 * unquez-site - UnQuez website
 * @author Yusril Herlian Syah <yusrilhsyah@gmail.com>
 * @link 
 * @license CC-BY-4
 */
$(function() {
  var mainTop = $('#main-content').offset().top;
  var navbar = $('.navbar');

  $(window).on('scroll', function() {
    if ($(window).scrollTop() > mainTop) {
      if (!navbar.hasClass('fixed-top')) {
        navbar.removeClass('navbar-transparent navbar-dark bg-dark')
              .addClass('fixed-top navbar-light bg-light');
      }
    } else {
      if (navbar.hasClass('fixed-top')) {
        navbar.removeClass('fixed-top navbar-light bg-light')
              .addClass('navbar-transparent navbar-dark bg-dark');
      }
    }
  });

});
