//array with values for random generation 
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
       'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
       't', 'u', 'v', 'w', 'x', 'y', 'z'];

//object is used to define properties and used to keep things contained with in game, used for game interaction
var psychic = {
	//set default value to 0 - after it changes with game actions
	wins: 0,
	loses: 0,
	//set default value to 0 - reset with startover function
	lives: 11,
	//array for future userguess incorrect input initializing
	incorrect: [],
	//genrating random letter from array
	computerGuess: alphabet[Math.floor(Math.random() * alphabet.length)],
	//reset method for properties but not affecting wins and loses 
	startOver: function(){
		//reset
		this.lives = 11;
		this.incorrect = [];
		this.computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
		console.log(this.computerGuess)

	}
}

// var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
console.log(alphabet);
// var comGuess = alphabet[Math.floor(Math.random]
// console.log(psychic.test)

//start routine of keypress
document.onkeyup = function(event) {
	//document.eventlister also works
	// console.log(event)

//determine key pressed
	var letterGuess = event.key.toLowerCase();
	//event is valid if key is a-z
	if (event.keyCode >= 65 && event.keyCode <= 90){
		//letter guesses checks inccorect letter array to make duplicate key press invalid
		if (psychic.incorrect.indexOf(letterGuess) == -1){

			//if user guess is same as computer add to win
			if (letterGuess == psychic.computerGuess) {
				//log win by adding plus 1 to wins
				psychic.wins++
				//reset startover
				psychic.startOver();
				//congradulate on good guess
				console.log('good job');
			}
			else {
				// subtract from lives
				psychic.lives--
				//logging incorrect key press to incorrect array
				psychic.incorrect.push(letterGuess);

				// console.log("guess again")
				//if lives end add to loses start new game
				if (psychic.lives == 0) {
					psychic.loses++
				//start new game after loss
					psychic.startOver();
				}
			}
			//assignments are valid if correct keys are pressed
			document.getElementById('wins').value = psychic.wins;
			document.getElementById('loses').value = psychic.loses;
			document.getElementById('lives').value = psychic.lives;
			document.getElementById('incorrect').value = psychic.incorrect;
			// console.log("test")
		}
	}
}
// actions

// attemptTitle.innerHTML = "You have this many attempts left: " + counter;
// console.log(randomWord);