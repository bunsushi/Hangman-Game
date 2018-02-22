window.onload = function () {

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

    // Global variables
    var maxGuesses = 10; //Max number of guesses
    var userGuesses = 0; // Number of remaining guesses
    var wins = 0; // How many wins the player has
    var losses = 0;
    var puzzle = []; // Empty array stores player guesses
    var x;

    // Get elements
    var totalGuesses = document.getElementById('guessesRemaining');
    var currentWins = document.getElementById('totalWins');
    var currentLosses = document.getElementById('totalLosses');

    var destination = document.getElementById('destination');

    // Start game creates alphabet buttons
    function startGame() {

        var playerGuesses = document.getElementById('playerGuesses');
        var usedGuesses = document.getElementById('usedGuesses');
        // var totalGuesses = document.getElementById('guessesRemaining');


        userGuesses = maxGuesses;

        totalGuesses.innerHTML = 'T-' + userGuesses;
        currentWins.innerHTML = wins;
        currentLosses.innerHTML = losses;

        makeAlphabet();
        newPuzzle();

    }

    // Generate alphabet buttons
    function makeAlphabet() {
        for (var i = 0; i < alphabet.length; i++) {
            var l = document.createElement('div');
            l.innerHTML = alphabet[i];
            l.className = 'btnLetter';
            playerGuesses.appendChild(l);
        }
    }

    // Generates blank underscores for a randomly selected puzzle word
    function newPuzzle() {
        for (var i = 0; i < randomWord.length; i++) {
            puzzle[i] = ("_");
        }
        x = puzzle.join(" ");
        document.getElementById("currentWord").innerHTML = x;
    }

    // Type puzzle
    // ! Restrict input to alphabet letters only!
    document.onkeydown = function (input) {
        var typeGuess = input.key.toUpperCase();

        //Adds input key to Your Guesses
        var l = document.createElement('div');
        l.innerHTML = typeGuess;
        l.className = 'lblUsed';
        usedGuesses.appendChild(l);

        //Evaluates key
        for (var i = 0; i < randomWord.length; i++) {

            //If key matches a string in the puzzle, reveal string
            if (typeGuess === randomWord[i]) {
                puzzle[i] = typeGuess;
            }
        }

        var j = (randomWord.indexOf(typeGuess));
        if (j === -1) {
            userGuesses--; // This allows correct answers but subtracts the number of the string
            totalGuesses.innerHTML = 'T-' + userGuesses;
        }

        //Displays a correctly guessed letter
        document.getElementById("currentWord").innerHTML = puzzle.join(" ");

        // Win
        solved();
    }

// Function to check if player has solved puzzle
function solved() {
    var answerArrayString = puzzle.toString();
    if (answerArrayString.indexOf("_") === -1) {
        wins++;
        totalWins.innerHTML = wins; //ATTN: if user types another character, adds to wins col
        //Restart game, okay?
        console.log('Hurrah');

        if (randomWord === "MERCURY") {
            console.log("Mercury");
            //display picture of Mercury
            destination.src='assets/images/mercury.jpg';
        }

        if (randomWord === "VENUS") {
            console.log("Venus");
            //display picture of Venus
            destination.src='assets/images/venus.jpg';
        }

        if (randomWord === "EARTH") {
            console.log("Earth");
            //display picture of Earth
            destination.src='assets/images/earth.jpg';
        }

        if (randomWord === "MARS") {
            console.log("Mars");
            //display picture of Mars
            destination.src='assets/images/mars.jpg';
        }

        if (randomWord === "JUPITER") {
            console.log("Jupiter");
            //display picture of Jupiter
            destination.src='assets/images/jupiter.jpg';
        }

        if (randomWord === "SATURN") {
            console.log("Saturn");
            //display picture of Saturn
            destination.src='assets/images/saturn.jpg';
        }

        if (randomWord === "URANUS") {
            console.log("Uranus");
            //display picture of Uranus
            destination.src='assets/images/uranus.jpg';
        }

        if (randomWord === "NEPTUNE") {
            console.log("Neptune");
            //display picture of Neptune
            destination.src='assets/images/neptune.jpg';
        }

        if (randomWord === "PLUTO") {
            console.log("Pluto");
            //display picture of Pluto
            destination.src='assets/images/pluto.jpg';
        }

    }
}

startGame();

} //Closes window.onload function