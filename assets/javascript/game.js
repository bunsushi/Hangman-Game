window.onload = function () {

    // WORD BANK
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

    // ALPHABET BUTTONS
    var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

    // Chooses a random word from the array planets
    // var randomWord = planets[Math.floor(Math.random() * planets.length)].toUpperCase();

    // GLOBAL VARIABLES
    var maxGuesses = 10; //Max number of guesses
    var userGuesses = 0; // Number of remaining guesses
    var wins = 0; // Number of wins
    var losses = 0; // Number of losses
    var puzzle = []; // Empty array stores player guesses
    var complete = false; // To reset the game
    var x;
    var randomWord;
    var typeGuess;

    // GET ELEMENTS
    var currentWord = document.getElementById('currentWord');
    var totalGuesses = document.getElementById('guessesRemaining');
    var playerGuesses = document.getElementById('playerGuesses');
    var usedGuesses = document.getElementById('usedGuesses');
    var currentWins = document.getElementById('totalWins');
    var currentLosses = document.getElementById('totalLosses');
    var destination = document.getElementById('destination');
    var button = document.getElementsByClassName('btnLetter');

    // GENERATE ALPHABET BUTTONS
    function makeAlphabet() {
        for (var i = 0; i < alphabet.length; i++) {
            var l = document.createElement('div');
            l.innerHTML = alphabet[i];
            l.className = 'btnLetter';
            playerGuesses.appendChild(l);
        }
    }

    // GENERATE NEW PUZZLE
    function newPuzzle() {
        userGuesses = maxGuesses;
        totalGuesses.innerHTML = 'T-' + userGuesses;
        currentWins.innerHTML = wins;
        currentLosses.innerHTML = losses;
        destination.src = 'assets/images/astronaut.jpg'

        // Clear your old guesses
        usedGuesses.innerHTML = "";

        // Clear your old puzzle
        puzzle = [];

        // Generate a new random word
        randomWord = planets[Math.floor(Math.random() * planets.length)].toUpperCase();

        // Queue up a blank puzzle
        gameBoard();
    }

    // GENERATE GAME BOARD
    function gameBoard() {
        // Generate puzzle blanks
        for (var i = 0; i < randomWord.length; i++) {
            puzzle.push(" _ ");
        }

        // String the (" _ ") together
        var puzzleText = "";
        for (var j = 0; j < puzzle.length; j++) {
            puzzleText += puzzle[j];
        }

        // Display the puzzle blanks
        currentWord.innerHTML = puzzleText;
    }

    //MAKE A GUESS
    function makeGuess() {

        //Add typed letter guess to Your Guesses
        var l = document.createElement('div');
        l.innerHTML = typeGuess;
        l.className = 'lblUsed';
        usedGuesses.appendChild(l);

        //Evaluate guess
        for (var i = 0; i < randomWord.length; i++) {

            //If guess matches a string in the puzzle, reveal string
            if (typeGuess === randomWord[i]) {
                puzzle[i] = typeGuess;
            }
        }

        //If key does not match a string in the puzzle, subtract a guess
        var j = (randomWord.indexOf(typeGuess));
        if (j === -1) {
            userGuesses--;
            totalGuesses.innerHTML = 'T-' + userGuesses;
        }

        //Display a correctly guessed letter in puzzle
        currentWord.innerHTML = puzzle.join(" ");

        //Hide alphabet button NOT WORKING
        if (typeGuess === button) {
            button.style.visibility = "hidden";
        }
    }

    document.onkeydown = function (input) {
        // If a game is finished, press any key to continue
        if (complete) {
            newPuzzle();
            complete = false;
        } else {
            // Restrict allowed keys to A-Z
            if (input.keyCode >= 65 && input.keyCode <= 90) {
                console.log(input.key);
                typeGuess = input.key.toUpperCase();
                makeGuess(typeGuess);
                solved(); // Checks if player won
                lost(); // Checks if player lost
            }
        }
    }

    // WIN CONDITIONS
    function solved() {
        var answerArrayString = puzzle.toString();
        if (answerArrayString.indexOf("_") === -1) {
            wins++;
            totalWins.innerHTML = wins;
            complete = true;
            console.log('Hurrah');

            if (randomWord === "MERCURY") {
                console.log("Mercury");
                //display picture of Mercury
                destination.src = 'assets/images/mercury.jpg';
            }

            if (randomWord === "VENUS") {
                console.log("Venus");
                //display picture of Venus
                destination.src = 'assets/images/venus.jpg';
            }

            if (randomWord === "EARTH") {
                console.log("Earth");
                //display picture of Earth
                destination.src = 'assets/images/earth.jpg';
            }

            if (randomWord === "MARS") {
                console.log("Mars");
                //display picture of Mars
                destination.src = 'assets/images/mars.jpg';
            }

            if (randomWord === "JUPITER") {
                console.log("Jupiter");
                //display picture of Jupiter
                destination.src = 'assets/images/jupiter.jpg';
            }

            if (randomWord === "SATURN") {
                console.log("Saturn");
                //display picture of Saturn
                destination.src = 'assets/images/saturn.jpg';
            }

            if (randomWord === "URANUS") {
                console.log("Uranus");
                //display picture of Uranus
                destination.src = 'assets/images/uranus.jpg';
            }

            if (randomWord === "NEPTUNE") {
                console.log("Neptune");
                //display picture of Neptune
                destination.src = 'assets/images/neptune.jpg';
            }

            if (randomWord === "PLUTO") {
                console.log("Pluto");
                //display picture of Pluto
                destination.src = 'assets/images/pluto.jpg';
            }

        }
    }

    // LOSE CONDITIONS
    function lost() {
        if (userGuesses <= 0) {
            losses++;
            totalLosses.innerHTML = losses;
            complete = true;
            console.log("Too bad");

            if (randomWord === "MERCURY") {
                console.log("Mercury");
                //display picture of Mercury
                destination.src = 'assets/images/mercury.jpg';
            }

            if (randomWord === "VENUS") {
                console.log("Venus");
                //display picture of Venus
                destination.src = 'assets/images/venus.jpg';
            }

            if (randomWord === "EARTH") {
                console.log("Earth");
                //display picture of Earth
                destination.src = 'assets/images/earth.jpg';
            }

            if (randomWord === "MARS") {
                console.log("Mars");
                //display picture of Mars
                destination.src = 'assets/images/mars.jpg';
            }

            if (randomWord === "JUPITER") {
                console.log("Jupiter");
                //display picture of Jupiter
                destination.src = 'assets/images/jupiter.jpg';
            }

            if (randomWord === "SATURN") {
                console.log("Saturn");
                //display picture of Saturn
                destination.src = 'assets/images/saturn.jpg';
            }

            if (randomWord === "URANUS") {
                console.log("Uranus");
                //display picture of Uranus
                destination.src = 'assets/images/uranus.jpg';
            }

            if (randomWord === "NEPTUNE") {
                console.log("Neptune");
                //display picture of Neptune
                destination.src = 'assets/images/neptune.jpg';
            }

            if (randomWord === "PLUTO") {
                console.log("Pluto");
                //display picture of Pluto
                destination.src = 'assets/images/pluto.jpg';
            }
        }
    }

    makeAlphabet();
    newPuzzle();


} //Closes window.onload function