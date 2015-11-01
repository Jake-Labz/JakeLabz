// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

// icon flipping
$(document).ready(function(){
	$('.icon-flip').click(function(){
		$(this).toggleClass('flipped')
	})
	$('#topnav_button, #topnav .nav_item').click(function(){
		$('#topnav').fadeToggle(400)
	})
})