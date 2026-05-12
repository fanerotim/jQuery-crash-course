// get main and give it display: flex;
$('main').css('display', 'flex');
// align items, add some gap
$('main').css({
    'gap': '1rem',
    'border': '1px solid purple',
    'padding': '1rem',
})

// get section one and give it border
$('.section-one').css('background-color', 'lightgrey');
// add padding to first section
$('main section').css('padding', '.5rem');

// get second section in the dom
$('main section:last-child').css('background-color', 'lightblue');
// add some padding to second section in the DOM, but access it in a different way
$('main section:nth-child(2)').css('padding', '.5rem');

// get input with type='submit';
$('input:submit').css('color', 'orange');

// get inputs with type='text';
$('input:text').css('background-color', 'black');

