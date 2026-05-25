// hide and show handlers
function hide(element, time) {
    console.log(time);
    if (time) {
        setTimeout(() => {
            $(element).hide()
        }, time)
    } else {
        $(element).hide();
    }
}

function show(element, time) {
    if (time) {
        setTimeout(() => {
            $(element).show();
        }, time)
    } else {
        $(element).show();
    }
}

// CLICK EVENTS
//  hides text
$('.btn-hide').click(function () {
    hide('.text-container')
});

// shows text
$('.btn-show').click(function () {
    show('.text-container')
});

// SUBMIT EVENT     
$('.form').submit((e) => {
    // we skip input validation in this demo
    e.preventDefault();
    const formData = new FormData(e.target);

    const email = formData.get('email');
    // const firstName = formData.get('firstName');
    // const lastName = formData.get('lastName');
    

    $('.form').hide();

    const container = $('<div></div>');
    const heading = $('<h3></h3>');

    heading.html(`Thanks for submitting the form <span style="color: grey">${email}</span>!`);
    container.append(heading);
    container.css('margin-top', '4rem');
    container.css('text-align', 'center');
    
    $('body').append(container);

    setTimeout(() => {
        container.remove();
        $('.form').show();
    }, 3000)

})

// add input styles on fucus event
$('input').focus(function () {
    $(this).css({ 'background-color': 'black', 'color': 'white',  'border': 'none' })
})

// remove styles on input blur event
$('input').blur(function () {
    $(this).css({ 'background-color': 'white', 'color': 'black', 'padding': '0', 'outline': '1px solid grey' })
})