$( document ).ready(function(){
 $(".button-collapse").sideNav();

 $('.slider').slider({
 	indicators: false,
 	height: 550
 	});

$(function () {
  $(document).scroll(function () {
    var $nav = $(".nav-switch");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});
 
});