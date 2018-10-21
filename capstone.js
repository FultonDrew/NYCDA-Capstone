
var start = document.getElementById('startButton');



start.addEventListener("click", function(){
    startGame();
    console.log('game started');
});

var words = ["apple", "banana","orange","grape","canteloupe","watermelon","apricot","mango","starfruit", "dragonfruit","tangerine","lemon", "kiwi"];
var word = words[Math.floor(Math.random() * words.length)];
console.log(word);
var answerArray = [];
var usedLetters = [];
var usedLettersBox = document.getElementById('usedLetters');
var remainingLetters = word.length;
var gameBoard = document.getElementById('gameBoard');

function startGame(){

    console.log('game stared');
    
    console.log('gam started');
    
    console.log('game started');
    document.createElement("div")
    
    gameBoard.style.width = "150px";
    gameBoard.style.height = "50px";
    gameBoard.style.border = "2px solid black";
    usedLettersBox.style.width = "150px";
    usedLettersBox.style.height = "50px";
    usedLettersBox.style.border = "2px solid black";
    for (let i = 0; i < word.length;i++){
      answerArray[i] = "_";
      console.log('answerArray');
      gameBoard.innerHTML = answerArray.join(" ");
      
      
    }
};



var submit = document.getElementById('submitButton');



function inputGuess(){
  var input = document.getElementById('input');
  var submit = document.getElementById('submitButton');
  var guess = input.value;
  if(guess.length !== 1) {
    console.log("please enter a single letter");
  } else {
    console.log(guess);
    for (let j = 0; j<word.length; j++) {
      
      if (word[j] === guess) {
        answerArray[j] === guess;
        answerArray[j] = guess;

        gameBoard.innerHTML = answerArray.join(" ");
        console.log('hello')
        remainingLetters--;
        if(remainingLetters === 0){
          alert("Good job! The answer was " + word);
          }
        
      }

      }

          usedLetters.push(guess);
          usedLettersBox.innerHTML = usedLetters;
          if( usedLetters == 3){
            alert("Game over");
          }
    }
    
  }




var start = document.getElementById('startButton');
var hint = document.getElementById('hintButton');
var body = document.getElementById('body');
var gameBoard = document.getElementById('gameBoard');
var submit = document.getElementById('submitButton');
var input = document.getElementById('input');
var usedBox = document.getElementById('usedBox');
var turnCounter = document.getElementById('turnCounter');
var wrongLetters = [];
var startTheGame = 0;
var winnerCount = 0;
var winnerArray = [];



var w1 = {word: "apple", hint: "Adam shouldn't have eaten it"}
var w2 = {word: 'banana', hint: "Donkey kong's favorite food"}
var w3 = {word: 'orange', hint: "Named after a color"}
var w4 = {word: 'grape', hint: "These are 'bunches' of fun"}
var w5 = {word: 'canteloupe', hint: "The pessimistic melon"}
var w6 = {word: 'watermelon', hint: "Don't eat its seeds"}
var w7 = {word: 'apricot', hint: "Almost a peach"}
var w8 = {word: 'mango', hint: "Bingo Bango, this is a ___"}
var w9 = {word: 'starfruit', hint: "From outer space"}
var w10 = {word: 'dragonfruit', hint: "Breathes fire"}
var w11 = {word: 'tangerine', hint: "Orange's little brother"}
var w12 = {word: 'lemon', hint: "Sprite's main ingredient"}
var w13 = {word: 'kiwi', hint: "An Australian neighbor"}
var w14 = {word: 'blueberry', hint: "Small and round"}
var w15 = {word: 'rasberry', hint: "Kids put them on their fingers"}
var w16 = {word: 'blackberry', hint: "A bigger, better rasberry"}
var w17 = {word: 'peach', hint: "Mario's princess"}
var w18 = {word: 'lime', hint: "Small green lemon"}
var w19 = {word: 'cherry', hint: "Delicious with a pit"}
var w20 = {word: 'plum', hint: "A purple Peach"}




var listOfWords = [w1, w2, w3, w4, w5, w6, w7, w8, w9, w10, w11, w12, w13,w14,w15,w16,w17,w18,w19,w20];
console.log(listOfWords)
var randomWord = listOfWords[Math.floor(Math.random() * listOfWords.length)];
console.log(randomWord)
var counter = randomWord.word.length + 3;

var answerArray = [];
var remainingLetters = randomWord.word.length;

start.addEventListener("click", function(){
    startGame();
    startTheGame ++;
    console.log('game started');
});


function startGame(){
  //on start button, creates a container box which holds each letter of the word to guess
      var container = document.createElement("div");
      container.id = 'brickContainer';
      container.className = "brickContainer";
      container.style.border = "2px solid black";
      container.style.borderRadius = "5px";
      container.style.width = "90%";
      container.style.height = "60%";
      container.style.display = "inline-block";
      // container.style.backgroundColor = "#E5D0C4";
      container.style.backgroundColor = "#D0D0D0";
      container.style.boxShadow = "2px 2px 2px";
      container.style.overflow = "hidden";
      gameBoard.appendChild(container);

      //on start button, creates a box for each letter of the word to guess
  for (let i = 0; i < randomWord.word.length;i++){
      var brick = document.createElement("div");
      gameBoard.setAttribute("align", "center");
      brick.id = "brick"+[i];
      brick.className = "brick";
      container.appendChild(brick)[i]
      brick.style.border = "2px solid black";
      brick.style.width = "90px";
      brick.style.height = "90px";
      brick.style.display = "inline-block";
      brick.style.margin = "15px"
      brick.style.fontSize = "3.5em"
      brick.style.textAlign = "center"
      brick.style.overflow = "hidden"

      //sets the brick size smaller so that the word always fits on one line
        if(randomWord.word.length >= 7){
          brick.style.width = "80px";
          brick.style.height = "80px";
          // console.log('are you working')
        }
    
      }

    
      

    //adds a box to collect all of the used letters
      var letterContainer = document.createElement("div");
      letterContainer.id = "letterContainer";
      usedBox.appendChild(letterContainer)
      letterContainer.style.width = "55px*usedLetters";
      letterContainer.style.height = "98%";
      letterContainer.style.margin = "0 auto";
      letterContainer.style.display = "inline-block";
      letterContainer.style.backgroundColor = "#D0D0D0";
      letterContainer.style.fontSize = "3em"
      letterContainer.style.textAlign = "center"

    //adds a hint box
      var hintContainer = document.createElement("div");
      hintContainer.id = "hintContainer";
      hintBox.appendChild(hintContainer);
      
      hintContainer.style.width = "500px*randomWord.hint.length";
      hintContainer.style.height = "200px*randomWord.hint.length";
      hintContainer.style.display = "inline-block";
      hintContainer.style.padding = "10px"
      hintContainer.style.borderRadius = "5px";
      hintContainer.style.fontSize = "1.5em"
      hintContainer.style.textAlign = "center"

    //adds a turn counter
      var turnCounter = document.createElement("div");
      turnCounter.id = "turnCounter";
      turnsLeft.appendChild(turnCounter);
      turnCounter.style.width = "100%";
      turnCounter.style.height = "100%";
      turnCounter.style.display = "block";
      turnCounter.style.fontSize = "2em"
      turnCounter.style.textAlign = "center"
      turnCounter.style.backgroundColor = "#D0D0D0"



  //if player hits 'start game' while playing, this will refresh the page to start again
      if(startTheGame == 1){
       var multipleStarts =  window.confirm('Oops, you started the game one-too-many times!');
       if(multipleStarts == true){
        document.location.reload();
        playGame();
       }        
        }
};

//takes input from player and checks for a match in the random word
function inputGuess(){
  var guess = input.value.toLowerCase();
  if(guess.length !== 1) {
    alert("please enter a single letter");
    } else {
      // console.log(guess);
      let wrongletter = false;
      for (let j = 0; j<randomWord.word.length; j++) {
        if (randomWord.word[j] === guess) {
            answerArray.push(guess)+ "-";
            // console.log(answerArray)
            document.getElementById('brick'+[j]).innerHTML = guess;
            
            wrongletter = true
            remainingLetters--;
            // console.log(remainingLetters)
            }
          }     
      
        if ( wrongletter == false){
          counter --
          // console.log(counter)
          wrongLetters += guess;
          document.getElementById('turnCounter').innerHTML = "Guesses Remaining:  " + counter;
          document.getElementById('letterContainer').innerHTML = wrongLetters;
          
          letterContainer.style.textAlign = "center"
          // letterContainer.stle.backgroundColor = "#E8E8E8";
          }

      if(counter === 0){ 
        console.log('gameover')
        alert("Game over");
        document.location.reload();
        startGame();
        }

      if(remainingLetters === 0){
         setTimeout(function(){
            if(window.confirm("Good job! The answer was " + randomWord.word)){
              location.reload();
            }
         }, 1000)
        winnerCount ++;
        winnerArray.push(winnerCount);
        // console.log(winnerCount);
        // document.location.reload();

        }
  
    }
}

//adds the hint function
function getHint(){
  var hint = "Hint: ";
  var linebreak = document.createElement("br");
  hintContainer.innerHTML = hint + " " + randomWord.hint;
  }


//listens for the enter key to input guess
document.getElementById("input").addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("submitButton").click();
        input.value = "";
        function inputTheGuess(event) {
          inputGuess();
          
        }
    }
});

//adds the hint box and displays the hint
hint.addEventListener("click", function(){
    getHint();
    hintContainer.style.border = "2px solid black";
    hintContainer.style.backgroundColor = "#D0D0D0";
});










// var remainingLetters = word.length;
// var gameBoard = document.getElementById('gameBoard');
// gameBoard.style.width = "150px";
// gameBoard.style.height = "50px";
// gameBoard.style.border = "2px solid black";
// var input = document.getElementById('input');
// var submitButton = document.getElementById('submitButton');
// var start = document.getElementById('startButton');


// while (remainingLetters > 0){
//   gameBoard.innerHTML = answerArray.join(" ");
//   var guess = input.value;

//   if(guess ==- null) {
//     break;
//   } else if (guess.length !== 1) {
//     alert("Please enter a single letter.");
//   } else {
//   console.log(guess);
//      for (var j = 0; j < word.length; j++) {
//       if (word[j] === guess) {
//         answerArray[j] = guess;
//         remainingLetters--;
//       }
//     }
//   }
//   }
// gameBoard.innerHTML = answerArray.join(" ");
// // alert("Good job! The answer was " + word);
//   console.log(guess);

// var words = ["apple", "banana","orange","apple","grape","canteloupe","watermelon","apricot","mango","starfruit"];

// var word = words[Math.floor(Math.random() * words.length)];

// var answerArray = [];
// for (let i = 0; i<word.length;i++){
//   answerArray[i] = "_";
// }

// var remainingLetters = word.length;

// while (remainingLetters > 0){
//   alert(answerArray.join(" "));
//   var guess = prompt("Guess a letter, or click cancel to stop playing.");
//   if(guess ==- null) {
//     break;
//   } else if (guess.length !== 1) {
//     alert("Please enter a single letter.");
//   } else {
//     for (var j = 0; j < word.length; j++) {
//       if (word[j] === guess) {
//         answerArray[j] = guess;
//         remainingLetters--;
//       }
//     }
//   }
//   }
// // alert(answerArray.join(" "));
// // alert("Good job! The answer was " + word);


