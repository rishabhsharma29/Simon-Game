let userChosenColor;
let gameLevel = 0;
let gamePattern = [];
let userClickedPattern = [];
let buttonColors = ['green', 'red', 'yellow', 'blue'];

$(document).keypress(function(){
    if(gameLevel === 0){
        nextSequence();
    }
})

function nextSequence(){
    gameLevel++;
    $('h1').text('Level '+gameLevel);
    let randomNumber = Math.floor(Math.random()*4);
    playSound(buttonColors[randomNumber]);
    animateButon(buttonColors[randomNumber]);
    gamePattern.push(buttonColors[randomNumber]);
    return randomNumber;
}

$(".btn").click(function(){
    userChosenColor = $(this).attr('id');
    playSound(userChosenColor);
    animateButon(userChosenColor);
    userClickedPattern.push(userChosenColor);
})

function playSound(buttonSound){
    switch(buttonSound){
        case 'green':
            let greenSound = new Audio('sounds/green.mp3');
            greenSound.play();
            break;
        case 'red':
            let redSound = new Audio('sounds/red.mp3');
            redSound.play();
            break;
        case 'yellow':
            let yellowSound = new Audio('sounds/yellow.mp3');
            yellowSound.play();
            break;
        case 'blue':
            let blueSound = new Audio('sounds/blue.mp3');
            blueSound.play();
            break;
    }
}

function animateButon(button){
    $('#'+button).fadeOut(100).fadeIn(100);
    $('#'+button).addClass('pressed');
    setTimeout(function(){
        $('#'+button).removeClass('pressed');
    }, 100)
}

function checkInput(){
    
}