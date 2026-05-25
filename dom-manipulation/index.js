// style add a task control section
$('.controls').css(
    {
        display: 'flex',
        'flex-direction': 'column',
        'align-items': 'center',
        width: 'fit-content',
        margin: '3rem auto'
    }
)

// add some basic styles to button and input of .controls section
$('.controls input').css('margin-bottom', '.5rem');
$('.controls button').css(
    {
        'width': 'fit-content',
        'padding': '.3rem .6rem',
        'margin-bottom': '.5rem'
    }
)

// add a class to tasks-hedding
$('section h1').addClass('tasks-heading');

// store taks in an array
const tasks = [];

$('.controls input').keyup(function (e) {
    const value = e.target.value;

    // if user pressed enter = add their input to the tasks list
    if (e.code === 'Enter') {
        // append method
        // $('.task-container').append(`<li>${value}</li>`);

        // appendTo method (both do the same, but syntax is different)
        $(`<li>${value}</li>`).appendTo($('.task-container'))
        // clear input
        e.target.value = null;

        // add the task to the tasks[];
        tasks.push(value);
    }
})

$('.controls button').click(function (e) {
    
    switch (e.target.innerText) {
        case 'Add a task': {
            const value = $('.controls input').val();
            if (value.trim()) {
                $('.task-container').append(`<li>${value}</li>`)
            }
            // add the task to the tasks[];
            tasks.push(value);
            break;
        }
        case 'Clear task list': {
            $('.task-container').empty();
            break;
        }
    }
});



