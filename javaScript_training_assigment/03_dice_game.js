class Dice {
		
		constructor(){
            this.result;
		}
		
		// class method
		roll(){
			return Math.floor(Math.random() * 6) + 1;
		}
        
        displayResult(){
            console.log(this.result);
        }
	// class end	
	}

    class Player {
				
		// class method
		turn(){
			var d1 = new Dice();
            var d2 = new Dice();
            var points = d1.roll() + d2.roll();
            
            return points;
		}
        
	// class end	
	}

var result = document.getElementById("result");
var playerScore = document.getElementById("playerScore");
var computerScore = document.getElementById("computerScore");
var playerNameHeader = document.getElementById("playerNameHeader");
var buttonPlayAgain = document.getElementById("buttonPlayAgain");
var buttonClearData1 = document.getElementById("buttonClearData");
var playerDice1 = document.getElementById("playerDice1");
var playerDice2 = document.getElementById("playerDice2");
var computerDice1 = document.getElementById("computerDice1");
var computerDice2 = document.getElementById("computerDice2");


// Check browser support
if (typeof(Storage) !== "undefined") {
    if(localStorage.getItem("name") != null){
        // Retrieve
        var playerName = localStorage.getItem("name");
        var computerPoints = localStorage.getItem("computerPoints");
        var playerPoints = localStorage.getItem("playerPoints");
    } else {
        var playerName = prompt("Name");
        var computerPoints = 0;
        var playerPoints = 0;
    }
} else {
    console.log("Sorry, your browser does not support Web Storage...");
}

var p1 = new Player();
var computer = new Player("Computer");
var player_points = p1.turn();
var computer_points = computer.turn();
if(player_points < computer_points){
    result.innerHTML = "You loose!";
    computerPoints++;
} else if(player_points === computer_points) {
    result.innerHTML = "It's a draw";
} else {
    result.innerHTML = "You win!";
    playerPoints++;
}

function playAgain(){
    location.reload();
}

function clearData(){
    localStorage.clear();
    location.reload();
}

buttonPlayAgain.addEventListener('click', playAgain);
buttonClearData.addEventListener('click', clearData);

playerNameHeader.innerHTML = playerName;
playerDice1.innerHTML = "Dice 1 = ";
playerDice2.innerHTML = "Dice 2 = ";
computerDice1.innerHTML = "Dice 1 = ";
computerDice2.innerHTML = "Dice 2 = ";
playerScore.innerHTML = "Your score: " + playerPoints;
computerScore.innerHTML = "Computer score: " + computerPoints;
// Store
localStorage.setItem("name", playerName);
localStorage.setItem("computerPoints", computerPoints);
localStorage.setItem("playerPoints", playerPoints);

