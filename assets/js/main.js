/*
	Photon by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	skel.breakpoints({
		xlarge: '(max-width: 1680px)',
		large: '(max-width: 1140px)',
		medium: '(max-width: 980px)',
		small: '(max-width: 736px)',
		xsmall: '(max-width: 480px)',
		xxsmall: '(max-width: 320px)'
	});

	$(function() {

		var	$window = $(window),
			$body = $('body');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				window.setTimeout(function() {
					$body.removeClass('is-loading');
				}, 250);
			});

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on mobile.
			skel.on('+mobile -mobile', function() {
				$.prioritize(
					'.important\\28 mobile\\29',
					skel.breakpoint('mobile').active
				);
			});

		// Scrolly.
			$('.scrolly').scrolly();

			var i = 0;
		    var pics = [ "images/create-changing2.jpg", "images/create-changing3.jpg","images/create-changing1.jpg" ];
		    function toggle() {
		    	$("#create-changing").fadeOut(500,function(){
		    		$("#changingImg").attr('src',pics[i]);
		    	});
		        $("#create-changing").fadeIn(500,function(){
		        	
		        });
		        i+=1;
		        if(i==3){
		        	i=0;
		        }
		    }
		    setInterval(toggle, 5000);

	});

})(jQuery);