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
	$('.about_photo').css('margin-left', '30px');
	$('.about_photo').css('margin-bottom', '0');
	$('.profile a').css('float', 'left');
	$('.profile p').css('display', 'inline-block');
	$('.nav_bar').css('font-size', 'initial');
}

function adjust_small(width) {
	$('.about_photo').css('margin-left', '0');
	$('.about_photo').css('margin-bottom', '20px')
	$('.profile a').css('float', 'initial');
	$('.profile p').css('display', 'block');
	if (width <= 540) {
		$('.nav_bar').css('font-size', '10px');
	}
	else {
		$('.nav_bar').css('font-size', 'initial');
	}
}

window.onload = adjust_text;

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
