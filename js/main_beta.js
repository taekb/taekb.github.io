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
    let new_subname = subnames[idx++ % subnames.length];

    $('#subname').animate({
        opacity: 0
    }, 1000, function() {
        $('#subname').text(new_subname).animate({
            opacity: 1
        }, 1000);
    });
}, 4000);

