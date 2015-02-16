myApp.styling = function() {
	var h = $(window).height();
	var w = $(window).width();

	$('#canvas').css({ top: h*.2 });
	if (w > 720) {
		$('#canvas').css({ width: w*.5 });
	} else { //mobile
		$('#canvas').css({ width: w*.8 });
	}

	var iconwidth = w * 1/8;
	if (iconwidth > h * .18) iconwidth = h * .18;
	if (iconwidth < h * .1) iconwidth = h * .1;
	$('#navigation-bar .icon').css({
		height: iconwidth
	});

	if( w > 400){
		$('#header').removeClass('invisible');
	}else{
		$('#header').addClass('invisible');
	}
	$('#header').css({
		padding: h * .1
	});

	var navheight = h * .2;

	$('#navigation-bar').css({
		height: navheight
	});

	var icontop = ( navheight - iconwidth ) / 2;

	$('#navigation-bar .selectable').css({
		top: icontop
	});
};

$( window ).resize(myApp.styling);
$( window ).load(myApp.styling);