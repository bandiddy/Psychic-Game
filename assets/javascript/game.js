  // VARIABLES
    // ==========================================================================
                    
    // The array of computer choices for our game.
    var computerChoice = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    // We start the game with a score of 0.
    var win = 0;

    // We start the game with 0 losses.
    var loss = 0;

    // We start the game with 9 guesses left
    var guesses = 9;

    var guessedLetters = [];

    var computerLetter;

    var keyCodeArray = [];

    // FUNCTIONS
    // ==============================================================================
    console.log(computerChoice)

    var computerGuess = function() {
        computerLetter = Math.floor(Math.random() * computerChoice.length)
        console.log(computerLetter)
    }

    var gLeft = function() {
        document.getElementById("left").innerHTML =   guesses
    }

    var gLetters = function() {
        document.getElementById("soFar").innerHTML =  guessedLetters.join(", ")
    }

    var initialize = function() {
        document.querySelector('#win').innerHTML = win;
        document.querySelector('#loss').innerHTML = loss;

        guesses = 9;
        guessedLetters = [];
        computerGuess();
        gLeft();
        gLetters();
    }


//The logic of the game 
//======================================================
function makeGuess(event) {
if (event.keyCode < 65){
    alert ("PICK A LETTER PLEASE!");
    return
} 
if (event.keyCode > 90) { 
    alert ("PICK A LETTER PLEASE!");
    return
}

// if (keyCodeArray === []) {

// }  


// for (i = 0; i < keyCodeArray.length; i++){
    
// if (keyCodeArray[i] === event.keyCode) {
//     alert ("DONT CHOOSE THE SAME LETTER!")
//     return
//     }
// }

    
var userGuess = event.key;
      console.log(userGuess);
      guesses--;
      guessedLetters.push(userGuess);
      gLeft();
      gLetters();
  // console.log(userGuess)
  console.log(guessedLetters)
      
  
    if (userGuess === computerLetter) {
        win++;
        document.getElementById("win").innerHTML = win;
        initialize();


      } else if (guesses === 0) {
          loss++;
          document.getElementById("loss").innerHTML = loss;
          initialize();
              }
          }


  document.querySelector('body').addEventListener('keydown', makeGuess);
initialize();
    