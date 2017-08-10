function adjust_text() {
	window_width = $(window).width();
	if (window_width <= 1000) {
		adjust_small();
	}
	else {
		adjust_large();
	}
}

function adjust_large() {
	$('.about_photo').css('margin-left', '30px');
	$('.about_photo').css('margin-bottom', '0');
	$('.profile a').css('float', 'left');
	$('.profile p').css('display', 'inline-block');
}

function adjust_small() {
	$('.about_photo').css('margin-left', '0');
	$('.about_photo').css('margin-bottom', '20px')
	$('.profile a').css('float', 'initial');
	$('.profile p').css('display', 'block');
}

window.onload = adjust_text;

$(window).resize(function() {
	if ($(window).width() <= 600) {
		adjust_small();
	}
	else {
		adjust_large();
	}
});

function show_text() {
	$('.title').hide();
	$('#about_intro').hide();
	$('#about_intro_2').hide();

	$('.title').fadeIn(1000);
	$('#about_intro').fadeIn(2500);
	$('#about_intro_2').fadeIn(4500);
}

$('a[href*="#"]').click(function(event) {
	var targetElement = $(this.hash);
	event.preventDefault();
	$('html, body').animate({
		scrollTop: $(targetElement).offset().top
	}, 750, function() {
		$(targetElement).focus();
		if ($(targetElement).is(':focus')) {
			return false;
		}
		else {
			$(targetElement).attr('tabindex', '-1');
			$(targetElement).focus();
		};
	});
});

$(document).ready(show_text());
