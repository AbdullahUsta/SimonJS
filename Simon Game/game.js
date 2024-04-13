var buttonColours = ["blue", "red", "green", "yellow",];
var gamePattern = [];

function nextSequence(){

    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadIn(100).fadeOut(100).fadIn(100);

}

