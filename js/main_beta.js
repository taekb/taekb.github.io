var subnames = ['Machine Learning + Genomics',
                'Machine Learning + Neuroscience',
                'Machine Learning & AI'];

// Prepare document
$(document).ready(function() {
    $('#name').hide();
    $('#subname').hide();
    $('#name').fadeIn(1000);
    $('#subname').fadeIn(1750);
});

// Cycle through subheader
var idx = 0;
setInterval(function() {
    $('#subname').delay(5000).fadeOut(1000);
    $('#subname').text(subnames[idx++ % subnames.length]);
    $('#subname').fadeIn(1000);
}, 1000);

