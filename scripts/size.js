$( window ).resize(function() {
	var h = $(window).height();
	var w = $(window).width();

	if (w > 720) {
		$('.canvas').css({
	        height: h*.5
	        width: w*.5
	    });
	} else { //mobile
		$('.canvas').css({
	        height: h*.5
	        width: w*.8
	    });
	}
});