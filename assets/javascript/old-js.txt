// RESOURCES
// http://jakeweb.net/JS_GAMES/lesson38/index.php
// https://codepen.io/cathydutton/pen/ldazc
// https://github.com/DanOrlovsky/Hangman-Game/blob/master/index.html

window.onload = function() {

// Array of potential puzzle words
var celestialBodies = [
    "SUN",
    "MERCURY",
    "VENUS",
    "EARTH",
    "MARS",
    "CERES",
    "JUPITER",
    "GANYMEDE",
    "SATURN",
    "URANUS",
    "NEPTUNE",
    "PLUTO",
    "ALPHA CENTAURI"
];

// Chooses a random word from the array celestialBodies
var randomWord = celestialBodies[Math.floor(Math.random() * celestialBodies.length)];

// Global variables
var wins = 0;
var remainingGuesses = 10;
var s;

// Stores player guess
var playerGuess = [];

// function newPuzzle() {
//     currentWord.innerHTML = ' ';
//     for (var i=0; i < randomWord.length; i++) {
//         //Creates a "div" with the variable letter
//         var letter = document.createElement('div');
//         //Assigns ID to underscore
//         letter.id = 'letter' + i;
//         //Assigns class "underscore" to spaces
//         if (randomWord[i] == ' ')
//         letter.className = 'underscore';
//         //Assings classes "underscore" and "letter" to letter characters in a string
//         else
//         letter.className = 'underscore letter';
//         //Displays letter
//         // letter.innerHTML = randomWord[i];
//         //Generates divs for every string in the array solarSystemItems
//         currentWord.appendChild(letter);
//     }
// }

function newPuzzle() {
    for (var i=0; i < randomWord.length; i++) {
        playerGuess[i] = "_";
    }

    s = playerGuess.join(" ");
    document.getElementById("currentWord").innerHTML = s;

    document.onkeyup = function(input) {
        var userGuess = input.key;
        
        for (var i=0; i < randomWord.length; i++) {
            if (randomWord[i] === userGuess) {
                playerGuess[i] = userGuess;
                console.log(playerGuess[i]);
            }
        }
    }
}

// function startGame() {
//     var currentWord = document.getElementById('currentWord');
//     currentWord.innerHTML = randomWord;
// }

// startGame();


// ! Don't forget to make random not repeat itself through array //

//When user types a key, check if key matches word
//if matches, display letter
//else remove letter from board and remove a life

// var guess = document.getElementById('playerGuesses'); // Get id 'player Guesses'
// var playerGuess = document.onkeydown;
// guess.appendChild(playerGuess);


// document.onkeydown = userGuess;
// function userGuess(input) {
//     console.log(input.key);
   
//     var guess = document.getElementById('playerGuesses');
//     guess.innerHTML = input.key;
//     guess.appendChild(userGuess + ', ');

    // for (var j = 0; j < randomWord.length; j++) {
    //     if (input.key === randomWord[i]) {
    //         alert(input.key);
    //     }
    // }
    //     }

newPuzzle();

} //Closes window.onload function