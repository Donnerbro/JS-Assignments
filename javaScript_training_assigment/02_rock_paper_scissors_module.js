var myGame = (function () {
	"use strict";
	// private variables
	//var myVar = "some value or expression"; <-- Syntax
	var playerChoiceDisplay = document.getElementById("player_choice");
    var computerChoiceDisplay = document.getElementById("computer_choice");
    var resultDisplay = document.getElementById("result");
    var userChoice = "";
    var computerChoice = "";
    var result = "";

	// functions
	//var myPrivateFunction;  <-- Syntax
	var computerInput;
	var compare;
	var display;

	// private functions
	/*myPrivateFunction = function() {  <-- Syntax
	
	};*/
	
	computerInput = function(){
		switch(Math.floor(Math.random() * 3)) {
            case 0:
                computerChoice = "Rock";
                break;
            case 1:
                computerChoice = "Paper";
                break;
            case 2:
                computerChoice = "Scissors";
                break;
            default:
                computerChoice = "Paper";
            }
	};
	
	compare = function() {
		if((userChoice === "Rock" && computerChoice === "Scissors") || (userChoice === "Paper" && computerChoice === "Rock") || (userChoice === "Scissors" && computerChoice === "Paper")){
               result = "You win... Well done!";
            } else if(userChoice === computerChoice){
                result = "It's a draw";
            } else {
                result = "Computer wins... Bad luck";
            }
	};
	
	display = function() {
		computerChoiceDisplay.innerHTML = computerChoice;
        playerChoiceDisplay.innerHTML = userChoice;
        resultDisplay.innerHTML = result;
	};
	
	return {
		// public functions
		/*myPublicFunction: function() {  <-- Syntax
			
		},*/
		
		play: function() {
			userChoice = this.id; // registering the buttons id!
   			computerInput();
    		compare();
    		display();
		}
		
		
	};

	// gameModule end //
})();

// The buttons
var buttons = document.getElementsByClassName("button"); // returning an array
for (var i = 0; i < buttons.length; i++) {
			buttons[i].addEventListener('click', myGame.play);
}

myGame.myPublicFunction();
myGame.play();

/* NOTE: The private code is modularized, while the public functions are object literals.
Keep in mind the different syntax, and remeber when to use "this" in the returned public functions */