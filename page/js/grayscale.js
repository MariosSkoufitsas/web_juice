firebase.auth().onAuthStateChanged(function(user) {
	if (user) {
		
		document.getElementById("login_div").style.display = "none";
		//document.getElementById("register_div").style.display = "none";
		document.getElementById("menou_juice").style.display = "block";


  } else {
    // No user is signed in.

    document.getElementById("login_div").style.display = "none";
		//document.getElementById("register_div").style.display = "none";
		document.getElementById("menou_juice").style.display = "block";
		document.getElementById("apostolh_div").style.display = "none";

  }
});


$('.carousel').carousel({
  interval: 2000
})




$("#mainNav").addClass("navbar-shrink");
(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 56
  });

  $('body').scrollspy({
  target: '#nav2',
  offset: 56
});

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 0) {
      $("#mainNav").addClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);



})(jQuery); // End of use strict


