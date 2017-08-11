/*
Copyright 2017 Daniel Jeong (@taekb)

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/  

function adjust_text() {
	window_width = $(window).width();
	if (window_width <= 1000) {
		adjust_small(window_width);
	}
	else {
		adjust_large();
	}
}

function adjust_large() {
	// Adjust title
	$('.title').css({
		'font-size': '120px',
		'padding-top': '300px',
		'padding-bottom': '300px'
	});

	// Adjust about_photo
	$('.about_photo').css({
		'margin-left': '30px',
		'margin-bottom': '0'
	});

	// Adjust profile lists
	$('.profile a').css('float', 'left');
	$('.profile p').css('display', 'inline-block');

	// Adjust navigation bar
	$('.nav_bar').css('font-size', 'initial');
}

function adjust_small(width) {
	// Adjust title
	$('.title').css({
		'font-size': '55px',
		'padding-top': '150px',
		'padding-bottom': '150px'
	});

	// Adjust about_photo
	$('.about_photo').css({
		'margin-left': '0',
		'margin-bottom': '20px'
	});

	// Adjust profile lists
	$('.profile a').css('float', 'initial');
	$('.profile p').css('display', 'block');

	// Adjust navigation bar
	if (width <= 540) {
		$('.nav_bar').css('font-size', '6px');
	}
	else {
		$('.nav_bar').css('font-size', 'initial');
	}
}

document.onload = adjust_text;

$(window).resize(adjust_text);

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
