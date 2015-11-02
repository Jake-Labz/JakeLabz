// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

// icon flipping
$(document).ready(function(){

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

	(function($){
	    $.fn.parallax = function(options){
	        var $$ = $(this);
	        offset = $$.position();
	        var defaults = {
	            start: offset.top,
	            stop: offset.top + $$.height(),
	            coeff: 0.95
	        };
	        var opts = $.extend(defaults, options);
	        return this.each(function(){
	            $(window).bind('scroll', function() {
	                windowTop = $(window).scrollTop();
	                if((windowTop >= opts.start) && (windowTop <= opts.stop)) {
	                    newCoord = windowTop * opts.coeff;
	                    $$.css({
	                        "background-position-y":  newCoord + "px"
	                    });
	                }
	            });
	        });
	    };
	})(jQuery);

	$('#splash').parallax({
		coeff: -0.5
	});

	$('.icon-flip, .nav_item a').click(function(){
		$('.overlay').fadeToggle(400);
		$('.icon-flip').toggleClass('flipped');
	});


	var scrollout = $('.scrollOut')
	
	var h1 = $('h1.standard')


	$(window).scroll(function(){

		var wheight = $(window).height()
		var winpos = $(window).scrollTop();
		var offset = (winpos) / 2.2 + ('px');
		var frac = (winpos) / (wheight);
		var op = 1 - (frac);
		var screenpos = winpos + wheight

		scrollout.css({'transform':'translateY(' +  offset + ')',
						'-webkit-transform':'translateY(' + offset + ')',
						'-moz-transform':'translateY(' + offset + ')',
						'-ms-transform':'translateY(' + offset + ')',
						'opacity':(op)
					});

		h1.each(function(){
			var offset = $(this).offset()
			var start = offset.top

			if (screenpos > start) {
				$(this).addClass('view');
			};
	});

	});
});
