//The random number shown at the start of the game should be between 19 - 120.
//Each crystal should have a random hidden value between 1 - 12.

$( document ).ready(function (){

// --- Variables ---

var targetScore = 0; 
var userScore = 0;
var wins = 0;
var losses = 0; 

var crystalArray = [
    "assets/images/crystal-1.jpg",
    "assets/images/crystal-2.jpg",
    "assets/images/crystal-3.jpg",
    "assets/images/crystal-4.jpg"
];


// --- Functions ---

// CREATE crystal images
function createCrystals() {
    for (var i=0; i<crystalArray.length; i++) {
        var rand = Math.floor(Math.random()*12 + 1);
        var img = $("<img>")
            img.addClass('crystal-img');
            img.attr('id', 'crystal-'+(i+1));
            img.attr('src', crystalArray[i]);
            img.attr('val', rand)
        $("#crystals").append(img);
    }
}

// for TARGET SCORE to get a RANDOM NUM between 19-120 (120-19 = 101)
function targetScoreSelector () {
    targetScore = Math.floor(Math.random()*101 + 19); 
    $("#targetScore-text").text(targetScore);
}

// for CRYSTAL to get a RANDOM VALUE between 1-12 
// var crystalValueSelector = function () {
//     $("#crystal-1").attr('val',  Math.floor(Math.random()*12 + 1));
//     $("#crystal-2").attr('val',  Math.floor(Math.random()*12 + 1));
//     $("#crystal-3").attr('val',  Math.floor(Math.random()*12 + 1));
//     $("#crystal-4").attr('val',  Math.floor(Math.random()*12 + 1));
// }


function resetGame () {
    targetScoreSelector();
    crystalValueSelector();
    userScore=0;
    $("#userScore-text").text(userScore);
}



// --- Main Process ---

// CREATE crystals
createCrystals();

// to SELECT a RANDOM targetScore
targetScoreSelector();

$(".crystal-img").on("click", function () {
    //alert("This is a crystal");

    //make user score based on random crystal values
    var crystalVal = $(this).attr('val');
    console.log(crystalVal);

    userScore += parseInt(crystalVal);
    // alert("Your new score is: " + userScore);

    $("#userScore-text").text(userScore);

    if (userScore === targetScore) {
        alert("You win!");
        wins++;
        $("#wins-text").text(wins);
        resetGame();

    } else if (userScore > targetScore) {
        alert("You lose!");
        losses++;
        $("#losses-text").text(losses);
        resetGame();
    }

});

});