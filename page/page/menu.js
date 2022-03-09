firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    var user = firebase.auth().currentUser;
    var email_id = user.email;

      document.getElementById("login_div").style.display = "none";
      document.getElementById("master_user").style.display = "block";
      document.getElementById("kalathi_Swho").style.display = "none";



  } else {
    // No user is signed in.

    document.getElementById("login_div").style.display = "block";
    document.getElementById("master_user").style.display = "none";
	document.getElementById("kalathi_Swho").style.display = "none";


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
  const name=[];
  const posothta=[];
  const poso=[];

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

function prosthikh1(){

	name.push("Μηλο Μπανανα");
	posothta.push(label1);
	poso.push(label1*2.20);
	console.log("eppppppppp"+name);
}
function kalathii(){

	document.getElementById("login_div").style.display = "none";
    document.getElementById("master_user").style.display = "none";
	document.getElementById("kalathi_Swho").style.display = "block";


	for(var t=0; t<name.length; t++){
		var tbl=document.getElementById("mytable");
	  var row = tbl.insertRow();

	  var cell1 = row.insertCell();
	  var cell2 = row.insertCell();
	  var cell3 = row.insertCell();
	  var cell4 = row.insertCell();


	  cell1.innerHTML=name[t];
	  cell2.innerHTML=posothta[t];
	  cell3.innerHTML=poso[t];


	  let btn = document.createElement("button");
		btn.innerHTML = "delete";
		cell4.appendChild(btn);
		btn.onclick =function() {deleteRow(this)};




	}
}

function deleteRow(r) {
  var i = r.parentNode.parentNode.rowIndex;
  document.getElementById("mytable").deleteRow(i);
  name.splice(i, 1);;
  posothta.splice(i, 1);;
  poso.splice(i, 1);;

  console.log(name+posothta+poso);
}
let idddd;
function sendorder(){

  firebase.auth().onAuthStateChanged(function(user) {
		let uid = user.uid;


      var n=0;
      firebase.database().ref("count").on("value", function(snap) {
      snap.forEach(function(Child) {
      let id= Child.val();


      if(n==0){
      id=id+1;
      idddd=id;
      n=n+1
      }






      firebase.database().ref("users").child(uid).on("value", function(snap) {
			snap.forEach(function(Child) {

				let full_name= Child.val().full_name;
        let dieuthinsh= Child.val().dieuthinsh;
        let tk= Child.val().tk;

      email = full_name;
      full_name = dieuthinsh;
      code_para = tk;
      diadikasia = "null";

      var user_data = {
          email : email,
          full_name : full_name,
          code_para : code_para,
          diadikasia : diadikasia

        }

       var database_ref = database.ref()
        database_ref.child('send/'+id).set(user_data)
        database_ref.child('send/'+id+'/diadikasias'+ '/diadikasi').set("null")
        database_ref.child('count/'+'id').set(id)

        for(var m=0; m<name.length; m++){

            onomaa=name[m];
            posothtaa=posothta[m];
            posoa=poso[m];

          var user_order={
            onoma : onomaa,
            posothta : posothtaa,
            poso : posoa
          }


           database_ref.child('send/'+id+'/paraggelia/'+m).set(user_order);
        }




        document.getElementById("login_div").style.display = "none";
        document.getElementById("master_user").style.display = "none";
    	  document.getElementById("kalathi_Swho").style.display = "none";
        document.getElementById("accept_div").style.display = "none";
        document.getElementById("discale_div").style.display = "none";
        document.getElementById("wait_div").style.display = "block";

        setInterval(myTimer, 5000);


            });
          });
        });
      });
    });

}

function myTimer() {
  console.log();
  firebase.database().ref("send").child(idddd).on("value", function(snap) {

		snap.forEach(function(child) {

      let flag = child.val().diadikasi;
      if(flag=="yes"){
        document.getElementById("login_div").style.display = "none";
        document.getElementById("master_user").style.display = "none";
    	  document.getElementById("kalathi_Swho").style.display = "none";
        document.getElementById("wait_div").style.display = "none";
        document.getElementById("discale_div").style.display = "none";
        document.getElementById("accept_div").style.display = "block";

      }
      if(flag=="NO"){
        document.getElementById("login_div").style.display = "none";
        document.getElementById("master_user").style.display = "none";
    	  document.getElementById("kalathi_Swho").style.display = "none";
        document.getElementById("wait_div").style.display = "none";
        document.getElementById("discale_div").style.display = "block";
        document.getElementById("accept_div").style.display = "none";
      }




	  });
	});
}


function login(){

  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

    // ...
  });

}

function logout(){

  firebase.auth().signOut();
}



function registerUser(){

  document.getElementById("login_div").style.display = "none";
  document.getElementById("master_user").style.display = "none";
  document.getElementById("register_user").style.display = "block";
}

function back(){
  document.getElementById("user_div").style.display = "none";
  document.getElementById("login_div").style.display = "none";
  document.getElementById("master_user").style.display = "block";
  document.getElementById("register_user").style.display = "none";
}


  function register(){

  	 // Get all our input fields
    email = document.getElementById('email').value
    password = document.getElementById('password').value
    full_name = document.getElementById('full_name').value
    dieuthinsh = document.getElementById('dieuthinsh').value
    tk = document.getElementById('tk').value
  	  // Move on with Auth
  	  auth.createUserWithEmailAndPassword(email, password)
  	  .then(function() {
  		// Declare user variable
  		var user = auth.currentUser

  		// Add this user to Firebase Database
  		var database_ref = database.ref()

  		// Create User data
  		var user_data = {
  		  email : email,
  		  full_name : full_name,
  		  dieuthinsh : dieuthinsh,
  		  tk : tk,
  		  last_login : Date.now()
  		}

  		// Push to Firebase Database
  		database_ref.child('users/' + user.uid+'/uidn').set(user_data)

  		database_ref.child('Users/' ).set(user_data)

  		// DOne
  		alert('User Created!!')
  	  })
  	  .catch(function(error) {
  		// Firebase will use this to alert of its errors
  		var error_code = error.code
  		var error_message = error.message

  		alert(error_message)
  	  })
  }
