$('.fadeOut-btn').click(function() {
    $('.content-container').fadeOut(1000, function() {
        $('.fadeOut-btn').text('Fade out done!');
        $('.fadeOut-btn').attr('dislabled', 'disabled');
        $('.fadeOut-btn').css(
            {
                'background-color': 'lightgrey',
                color: 'grey',
                cursor: 'auto'
            }
        )

        //TODO: Reset styles of Fade In button
    });
});

$('.fadeIn-btn').click(function() {
    $('.content-container').fadeIn(1000, function() {
        $('.fadeIn-btn').text('Faded In!');
        $('.fadeIn-btn').attr('disabled', 'disabled');
        $('.fadeIn-btn').css(
            {
                'background-color': 'lightgrey',
                color: 'grey',
                cursor: 'auto'
            }
        )

        //TODO: Reset styles of Fade Out button
    });
})