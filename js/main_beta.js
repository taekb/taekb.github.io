var subnames = ['ML + Multimodality',
                'ML + Robustness',
                'ML + Healthcare'];

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

