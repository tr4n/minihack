$(document).ready(() => {
    console.log('Document is ready');

    $('.create').on('submit', (event) => {
        event.preventDefault();
        $.ajax({
            url: '/api/games/',
            type: 'POST',
            data: {
                // gameId: ,
                first: $('#1').val(),
                second: $('#2').val(),
                third: $('#3').val(),
                fourth: $('#4').val(),
            },
            success: (data) => {
                window.location.href = `/answer/${data.data._id}`;
            },
            error: (_xhr, _statusCode ,error) => {
                console.log(error)
            },
        });
    });

    $('.question-button').click( () => {
        console.log('test');
        
        $.ajax({
            url: '/getTotalQuestions',
            type: 'GET',
            success: (data) => {
                $('.total-questions').text(data.totalQuestion);
            },
            error: (error) => {
                console.log(error);
            },
        });
    });
});