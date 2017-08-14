// GARY NOTES HERE

// 1. Figure out what my events are, and make a comment for each one.
//   // Start of game
var targetScore = 0;
var pinkCrystal = 0;
var purpleCrystal = 0;
var blueCrystal = 0;
var greenCrystal = 0;
var wins = 0;
var losses = 0;
var totScore = 0;
var message = "";

// calculate random total
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; 
  //The maximum is exclusive and the minimum is inclusive
}

function resetGame() {
  // set initial state of variables
    targetScore = getRandomInt(19, 120);
    pinkCrystal = getRandomInt(1, 12);
    purpleCrystal = getRandomInt(1, 12);
    blueCrystal = getRandomInt(1, 12);
    greenCrystal = getRandomInt(1, 12);
    totScore=0;
    console.log(pinkCrystal, blueCrystal, greenCrystal, purpleCrystal); 

}

function updateHTMLDisplay() {
    $("#targetScore").html(targetScore);
    $("#wins").html("Wins: " + wins);
    $("#losses").html("Losses: " + losses);
    $("#guessesThusFar").html(totScore);
    $("#message").html(message);
    // $(".goldminer").hide();
}

function onButtonClick(buttonNumbers) {
    console.log("A button was clicked " + buttonNumbers);
    totScore += buttonNumbers;

    if (totScore === targetScore) {
        wins++;
        message = "You win!";
        $(".goldminer").show();
        resetGame();
    } else if (totScore > targetScore) {
        losses++;
        message = "You lost!";
        resetGame(); 
    }

    updateHTMLDisplay();

}

$("#pinkCrystal").click(function() {
    console.log("pinkButtonclicked");
    onButtonClick(pinkCrystal);
});

$("#purpleCrystal").click(function() {
    console.log("purpleButtonclicked");
    onButtonClick(purpleCrystal);
});

$("#blueCrystal").click(function() {
    console.log("blueButtonclicked");
    onButtonClick(blueCrystal);
});

$("#greenCrystal").click(function() {
    console.log("greenButtonclicked");
    onButtonClick(greenCrystal);
});


$(document).ready(function() {

    console.log("I'm Ready!");
    resetGame();
    updateHTMLDisplay();
    alert("Let's Play the Crystal Game");
    
});




