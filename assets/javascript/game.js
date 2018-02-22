window.onload = function() {

// Array of words that can be randomly generated for puzzle
var planets = [
    "mercury",
    "venus",
    "earth",
    "mars",
    "jupiter",
    "saturn",
    "uranus",
    "neptune",
    "pluto",
];

// Alphabet buttons for seeing available letter guesses and already guessed letters
var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

// Chooses a random word from the array planets
var randomWord = planets[Math.floor(Math.random() * planets.length)].toUpperCase();

var userGuesses = 10; // Max number of guesses
var wins = 0; // How many wins the player has
var losses = 0;
var puzzle = []; // Empty array stores player guesses
var x;

// Start game creates alphabet buttons
function startGame() {

    var playerGuesses = document.getElementById('playerGuesses');
    var usedGuesses = document.getElementById('usedGuesses');

    for (var i = 0; i < alphabet.length; i++) {
        var l = document.createElement('div');
        l.innerHTML = alphabet[i];
        l.className = 'btnLetter';
        // l.onclick = function(){selectLetter(this); };
        playerGuesses.appendChild(l);
    }
}

// Select letter hides alphabet button and generates player's guess under 'Your Guesses'
// function selectLetter(selected){
//     selected.style.visibility = 'hidden';

//     var l = document.createElement('div');
//     l.innerHTML = selected.innerHTML;
//     l.className = 'lblUsed';
//     usedGuesses.appendChild(l);

//     var guess = selected.innerHTML;
//     for (var i = 0; i < randomWord.length; i++) {
//         if (randomWord[i] == guess) document.getElementById('letter'+i).innerHTML = guess;
//     }

//     var current = '';
//     for (var i=0; i < randomWord.length; i++) {
//         if (document.getElementById('letter'+i).innerHTML == '') current += ' ';
//         else current += document.getElementById('letter'+i).innerHTML;
//     }
//     if(current == randomWord) alert('Genius!'); //change alert to +1 on wins column and maybe reset
// }

// Generates blank underscores for a randomly selected puzzle word
function newPuzzle() {
    for (var i=0; i < randomWord.length; i++) {
        puzzle[i] = ("_");
    }
    x = puzzle.join(" ");
    document.getElementById("currentWord").innerHTML = x;
}

// Type puzzle
document.onkeydown = function(input) {
        var typeGuess = input.key.toUpperCase();
        // console.log(typeGuess);
        // var usedGuesses = document.getElementById("usedGuesses");
        // usedGuesses.innerHTML = typeGuess;
        var l = document.createElement('div');
        l.innerHTML = typeGuess;
        l.className = 'lblUsed';
        usedGuesses.appendChild(l);
        
        for (var i=0; i < randomWord.length; i++) {
            if (typeGuess === randomWord[i]) {
                puzzle[i] = typeGuess;
            }
        }
        //Displays a correctly guessed letter
        document.getElementById("currentWord").innerHTML = puzzle.join(" ");
    }

// Holds total guesses
function totalGuesses() {
    var totalGuesses = document.getElementById('guessesRemaining');
    totalGuesses.innerHTML = 'T-' + userGuesses;
}

// Holds current losses
function currentLosses() {
    var currentLosses = document.getElementById('totalLosses');
    currentLosses.innerHTML = losses;
}

function currentWins() {
    var currentWins = document.getElementById('totalWins');
    currentWins.innerHTML = wins;
}

startGame();    
newPuzzle();
totalGuesses();
currentWins();
currentLosses();


} //Closes window.onload function