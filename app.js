//let cards = document.querySelectorAll('.card');
let cards = $('.card');


cards = cards.sort((a, b) => 0.5 - Math.random());

$.each(cards, function (index) {
    switch (index) {
        case 0:
        case 1:
            $(this).addClass('red');
            break;

        case 2:
        case 3:
            $(this).addClass('blue');
            break;

        case 4:
        case 5:
            $(this).addClass('green');
            break;

        case 6:
        case 7:
            $(this).addClass('yellow');
            break;

        case 8:
        case 9:
            $(this).addClass('white');
            break;

        case 10:
        case 11:
            $(this).addClass('black');
            break;

        case 12:
        case 13:
            $(this).addClass('brown');
            break;

        case 14:
        case 15:
            $(this).addClass('grey');
            break;

}})

let flipped = [];
let score = 0;



function gameOver() {
    $('#end').css('display', 'block');
    $('main').css('display', 'none');
}

//Cheat
document.body.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        gameOver();
    }
})


function checkCards() {
    $(this).addClass('flipped');
    $(this).off('click');
    flipped.push($(this));

    if (flipped.length < 2) {
    }
    else {
        cards.off('click');
        if (flipped[0].attr('class') !== flipped[1].attr('class')) {
            setTimeout(() => {
                flipped[0].removeClass('flipped');
                flipped[1].removeClass('flipped');
                flipped.splice(0,2);
                cards.click(checkCards)
            }, 1000)
        } else {
            cards.click(checkCards);
            flipped[0].off('click');
            flipped[1].off('click');
            flipped.splice(0,2);
            score++;

            if (score >= 8) {
                gameOver();
            }
        }
    }

}


cards.click(checkCards)