window.onload = function() {

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

var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

// Chooses a random word from the array celestialBodies
var randomWord = planets[Math.floor(Math.random() * planets.length)];

function startGame() {
    var currentWord = document.getElementById('currentWord');
    currentWord.innerHTML = randomWord;

    var playerGuesses = document.getElementById('playerGuesses');
    var usedGuesses = document.getElementById('usedGuesses');

    for (var i = 0; i < alphabet.length; i++) {
        var l = document.createElement('div');
        l.innerHTML = alphabet[i];
        l.className = 'btnLetter';
        l.onclick = function(){selectLetter(this); };
        playerGuesses.appendChild(l);
    }
}

function selectLetter(selected){
    selected.style.visibility = 'hidden';

    var l = document.createElement('div');
    l.innerHTML = selected.innerHTML;
    l.className = 'lblUsed';
    usedGuesses.appendChild(l);
}

startGame();

function newPuzzle() {
    currentWord.innerHTML = ' ';
    for (var i=0; i < randomWord.length; i++) {
        //Creates a "div" with the variable letter
        var letter = document.createElement('div');
        //Assigns ID to underscore
        letter.id = 'letter' + i;
        //Assigns class "underscore" to spaces
        if (randomWord[i] == ' ')
        letter.className = 'underscore';
        //Assings classes "underscore" and "letter" to letter characters in a string
        else
        letter.className = 'underscore letter';
        //Displays letter
        letter.innerHTML = randomWord[i];
        //Generates divs for every string in the array solarSystemItems
        currentWord.appendChild(letter);
    }
}

// ! Don't forget to make random not repeat itself through array //

//When user types a key, check if key matches word
//if matches, display letter
//else remove letter from board and remove a life

document.onkeydown = userGuess;
function userGuess(input) {
    console.log(input.key);
   
    for (var j = 0; j < randomWord.length; j++) {
        if (input.key === randomWord[j]) {
            alert(input.key);
        }
        }
    }

newPuzzle();

} //Closes window.onload function