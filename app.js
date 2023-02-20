//let cards = document.querySelectorAll('.card');
let cards = $('.card');

//Cards 1 to 16
//Colors red, green, blue, yellow, white, black, brown, grey.

cards = cards.sort((a, b) => 0.5 - Math.random());

console.log(cards);

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

cards.click(function () {
    $(this).addClass("flipped");
    flipped.push($(this));
    if (flipped.length < 2){
        //rien de spécial
    } else {
        //On check les classes des deux
        if (flipped[0].attr('class') === flipped[1].attr('class')) {
            flipped[0].off('click');
            flipped[1].off('click');
            flipped.pop();
            flipped.pop();
        } else {
            flipped[0].delay(1000).removeClass('flipped');
            flipped[1].delay(1000).removeClass('flipped');
            flipped.pop();
            flipped.pop();
        }
    }

})

