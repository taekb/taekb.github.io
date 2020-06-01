var subnames = ['Machine Learning + Genomics',
                'Machine Learning + Neuroscience',
                'Machine Learning & AI'];

function show_text() {
	$('#name').hide();
	$('#subname').hide();

	$('#name').fadeIn(1000);
	$('#subname').fadeIn(1750);
}

function update_text() {
    for (i = 0; i < 3; i++) {
        $('#subname').delay(1000).fadeOut(1000);
        $('#subname').text(subnames[i]);
        $('#subname').fadeIn(1000);
    }
}

// Prepare document
$(document).ready(show_text());

// Cycle through subheader
var idx = 0;
setInterval(function() {
    $('#subname').delay(1000).fadeOut(1000);
    $('#subname').text(subnames[idx++ % subnames.length]);
    $('#subname').fadeIn(1000);
}, 1000);

