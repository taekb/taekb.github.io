function show_text() {
	$('#name').hide();
	$('#subname').hide();

	$('#name').fadeIn(1000);
	$('#subname').fadeIn(1750);
}

$(document).ready(show_text());