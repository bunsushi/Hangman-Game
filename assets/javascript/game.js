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

var userGuesses = 10; // max number of guesses
var wins = 0;
var losses = 0;

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
function selectLetter(selected){
    selected.style.visibility = 'hidden';

    var l = document.createElement('div');
    l.innerHTML = selected.innerHTML;
    l.className = 'lblUsed';
    usedGuesses.appendChild(l);

    var guess = selected.innerHTML;
    for (var i = 0; i < randomWord.length; i++) {
        if (randomWord[i] == guess) document.getElementById('letter'+i).innerHTML = guess;
    }

    var current = '';
    for (var i=0; i < randomWord.length; i++) {
        if (document.getElementById('letter'+i).innerHTML == '') current += ' ';
        else current += document.getElementById('letter'+i).innerHTML;
    }
    if(current == randomWord) alert('Genius!'); //change alert to +1 on wins column and maybe reset
}

// New Puzzle creates underscores for a randomly generated word
function newPuzzle() {
    var currentWord = document.getElementById('currentWord');
    currentWord.innerHTML = randomWord;

    currentWord.innerHTML = ' ';
    for (var i=0; i < randomWord.length; i++) {
        //Creates a "div" with the variable letter
        var letter = document.createElement('div');
        //Assigns ID to space
        letter.id = 'letter' + i;
        //Assigns class "space" to spaces
        if (randomWord[i] == ' ')
        letter.className = 'space';
        //Assigns classes "space" and "letter" to letter characters in a string
        else
        letter.className = 'space letter';
        //Displays letter
        // letter.innerHTML = randomWord[i];
        //Generates divs for every string in the array solarSystemItems
        currentWord.appendChild(letter);
    }
}

function totalGuesses() {
    var totalGuesses = document.getElementById('guessesRemaining');
    totalGuesses.innerHTML = 'T-' + userGuesses;
}

function currentLosses() {
    var currentLosses = document.getElementById('totalLosses');
    currentLosses.innerHTML = losses;
}

function currentWins() {
    var currentWins = document.getElementById('totalWins');
    currentWins.innerHTML = wins;
}

// When the player types a button that matches a string in the puzzle...
document.onkeydown = userGuess;
function userGuess(input) {

    var typeGuess = input.key.toUpperCase();
    for (var j = 0; j < randomWord.length; j++) {
        if (typeGuess === randomWord[j]) {
            document.getElementById('letter'+j).innerHTML = typeGuess;
        } else 
        losses = userGuesses - 1; //this doesn't reduce losses
        }
    }

startGame();    
newPuzzle();
totalGuesses();
currentWins();
currentLosses();

} //Closes window.onload function