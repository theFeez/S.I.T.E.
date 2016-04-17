    $(function () {
		function closeSearch() {
            var $form = $('.navbar-collapse form[role="search"].active')
    		$form.find('input').val('');
			$form.removeClass('active');
		}

		// Show Search if form is not active // event.preventDefault() is important, this prevents the form from submitting
		$(document).on('click', '.navbar-collapse form[role="search"]:not(.active) button[type="submit"]', function(event) {
			event.preventDefault();
			var $form = $(this).closest('form'),
				$input = $form.find('input');
			$form.addClass('active');
			$input.focus();
		});
		// ONLY FOR DEMO // Please use $('form').submit(function(event)) to track from submission
		// if your form is ajax remember to call `closeSearch()` to close the search container
		$(document).on('click', '.navbar-collapse form[role="search"].active button[type="submit"]', function(event) {
			event.preventDefault();
			var $form = $(this).closest('form'),
				$input = $form.find('input');
			$('#showSearchTerm').text($input.val());
            closeSearch()
		});
    });
    
    // fixes the navbar thing to stick to top
    $(document).ready(function() {
  $(window).scroll(function () {
  	
      //if you hard code, then use console
      //.log to determine when you want the 
      //nav bar to stick.  
    if ($(window).scrollTop() > 71) {
    	$('#fixed').show();
      $('.nav_bar').addClass('navbar-fixed-top');
    }
    
    if ($(window).scrollTop() < 71) {
    	$('#fixed').hide();
      $('.nav_bar').removeClass('navbar-fixed-top');
    }
  });
});


//smooth scroll to top
$("#homebtn").click(function() {
    $('html, body').animate({
        scrollTop: $("#header").offset().top
    }, 500);
});

//promt for password to exsit front desk kiosk
function passWord() {
var testV = 1;
var pass1 = prompt('Please Enter The Password',' ');
while (testV < 2) {
if (!pass1) 
window.open("front_desk.html","_self");
if (pass1.toLowerCase() == "admin") {
window.open("main.html","_self");
break;
} 
testV+=1;
var pass1 = 
prompt('Access Denied - Password Incorrect, Please Try Again.','Password');
}
if (pass1.toLowerCase()!="password" & testV ==3) 
history.go(-1);
return " ";
} 

//for PTSA Page
var tabbed ="shop";
$("#donate").click(function(){
    $("#shopbody").hide();
    $("#paybody").hide();
    $("#"+tabbed).removeClass('active');
    $("#donate").addClass('active');
    $("#donatebody").show();
    tabbed="donate";
});

$("#payment").click(function(){
    $("#shopbody").hide();
    $("#donatebody").hide();
    $("#"+tabbed).removeClass('active');
    $("#payment").addClass('active');
    $("#paybody").show();
    tabbed="payment";
});

$("#shop").click(function(){
    $("#donatebody").hide();
    $("#paybody").hide();
    $("#"+tabbed).removeClass('active');
    $("#shopbody").show();
    $("#shop").addClass('active');
    tabbed="shop";
});

 function paygood(){
    $("#paybanner").fadeIn(1000).delay(2000).fadeOut(3000);
}