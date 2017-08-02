/*$(window).scroll(function() {
	var windowHeight = $(window).height();
	var scrollBottom = $(this).scrollTop() + windowHeight;

	var eduTop = $('.education').offset().top;
	var eduHeight = $('.education').outerHeight();
	if (scrollBottom > eduTop) {
		alert('education');
		//$('.education h2').fadeIn(2500);
	}

	var expTop = $('.experience').offset().top;
	var expHeight = $('.experience').outerHeight();
	if (scrollTop > (expTop + expHeight - windowHeight)) {
		$('.experience h2, ul').fadeIn(1000);
	}
});*/

function show_text() {
	$('.title').hide();
	$('#about_intro').hide();
	$('#about_intro_2').hide();
	//$('.education h2').hide();

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
