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
    $('#subname').fadeOut(1000).text(subnames[idx++ % subnames.length]).fadeIn(1000).delay(2000);
}, 4100);

