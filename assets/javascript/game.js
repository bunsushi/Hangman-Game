// RESOURCES
// http://jakeweb.net/JS_GAMES/lesson38/index.php
// https://codepen.io/cathydutton/pen/ldazc
// https://github.com/DanOrlovsky/Hangman-Game/blob/master/index.html

window.onload = function() {

var solarSystemItems = [
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

var randomWord = solarSystemItems[Math.floor(Math.random() * solarSystemItems.length)];

function startGame() {
    var currentWord = document.getElementById('currentWord');
    currentWord.innerHTML = randomWord;
}

// startGame();

function newPuzzle() {
    currentWord.innerHTML = ' ';
    for (var i=0; i < randomWord.length; i++) {
        //Creates a "div" with the variable letter
        var letter = document.createElement('div');
        //Assigns ID to box
        letter.id = 'letter' + i;
        //Assigns class "box" to spaces
        if (randomWord[i] == ' ')
        letter.className = 'box';
        //Assings classes "box" and "letter" to letter characters in a string
        else
        letter.className = 'box letter';
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
        if (input.key === randomWord[i]) {
            alert(input.key);
        }
        }
    }

newPuzzle();

} //Closes window.onload function
