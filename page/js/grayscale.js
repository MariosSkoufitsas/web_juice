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


  var i = 0;
  function aaaa(){

    if(i==1){
      document.getElementById("aa").src = "../img/ek1.png";
      i=2;
    }
    else{
      document.getElementById("aa").src = "../img/ek11.png";
      i=1;
    }


  }
  
  var label1=0;
  function add1() {
	  if(label1<20){
		  label1=label1+1
	  }
	  
	  document.getElementById("swhowlabel1").innerHTML = label1;
  }
  
  function pre1(){
	  if(label1>0){
		  label1=label1-1;
	  }
	  
	  document.getElementById("swhowlabel1").innerHTML = label1;
  }
  

  function kalthi(){
	  document.getElementById("login_div").style.display = "block";
      document.getElementById("menou_juice").style.display = "none";
	   document.getElementById("hh2").innerHTML=label1;
  }
  
  firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    var user = firebase.auth().currentUser;
    var email_id = user.email;


    if(email_id=="mariosskoufi@gmail.com"){
      document.getElementById("user_div").style.display = "none";
      document.getElementById("login_div").style.display = "none";
      document.getElementById("master_user").style.display = "block";
      document.getElementById("register_user").style.display = "none";
      FetchaAllDataAllll();


    }
    else {
      document.getElementById("user_div").style.display = "block";
      document.getElementById("login_div").style.display = "none";
      document.getElementById("master_user").style.display = "none";
      document.getElementById("register_user").style.display = "none";
      FetchaAllData();
    }






    if(user != null){

        document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;


    }

  } else {
    // No user is signed in.

    document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "block";
    document.getElementById("master_user").style.display = "none";
    document.getElementById("register_user").style.display = "none";

  }
});

function login(){

  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Errorrrr : " + errorMessage);

    // ...
  });

}