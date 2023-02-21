let cards = $('.card');
let startButton = $('button');
let gameScreen = $('main').children()

gameScreen.hide();

//Randomly sorts cards
function arrayRandomizer(array) {
    return array.sort((a, b) => 0.5 - Math.random());
}

//Sets colors to cards
cardsSetter = () => {
    arrayRandomizer(cards);
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
}

let flipped = [];
let score = 0;
//TODO Timer

//Function ending the game
function gameOver() {
    gameScreen.hide()
    $('main').text('Partie terminée en ' + timer);
}

//Cheat
document.body.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        gameOver();
    }
})

//Functions for when cards are clicked and getting flipped, Checks the results
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

//TODO gameStart
let gameStart = () => {

}

startButton.click(gameStart)