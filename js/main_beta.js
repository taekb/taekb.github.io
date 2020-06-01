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
    while (true) {
        for (i = 0; i < 3; i++) {
            $('#subname').delay(1200).fadeOut(1000);
            $('#subname').text(subnames[i]);
            $('#subname').fadeIn(1000);
        }
    }
}

function process_text() {
    show_text();
    update_text();
}

$(document).ready(process_text());
