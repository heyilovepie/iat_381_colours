$( window ).resize(function() {
	var h = $(window).height();
	var w = $(window).width();

	$('#canvas').css({ top: h*.2 });
	if (w > 720) {
		$('#canvas').css({ width: w*.5 });
	} else { //mobile
		$('#canvas').css({ width: w*.8 });
	}

	var homeHeight = $('#navigation-bar .nav.navbar-nav.navbar-left').height();
	$('#navigation-bar .nav.navbar-nav.navbar-left').css({ width: homeHeight });
});