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
        
        constructor(name){
				this.name = name;
				this.score = 0;
		}
        
        set points(point){
            this.score = point;
        }
        
        get points(){
			return this.score;
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
var playerResultOutput = document.getElementById("playerResult");
var computerResultOutput = document.getElementById("computerResult");

if(localStorage.getItem("name") === null){
	localStorage.setItem("name", prompt("Name"));
	var p1 = new Player(localStorage.getItem("name"));
	localStorage.setItem('playerPoints', p1.points = 0);
	localStorage.setItem('computerPoints', 0);
	var computerPoints = 0;
	var playerPoints = 0;
    var playerName = localStorage.getItem("name");
}else{
	var p1 = new Player(localStorage.getItem("name"));
	var playerPoints = parseInt(localStorage.getItem('playerPoints'));
    p1.points = playerPoints;
    var computerPoints = parseInt(localStorage.getItem('computerPoints'));
    var playerName = localStorage.getItem("name");
}

    var dice_1 = new Dice();
	var dice_2 = new Dice();
	var dice_3 = new Dice();
	var dice_4 = new Dice();

    playerNameHeader.innerHTML = playerName;
    playerScore.innerHTML = "Your score: " + playerPoints;
    computerScore.innerHTML = "Computer score: " + computerPoints;

function play(){
    
    var playerDice_1 = dice_1.roll();
    var playerDice_2 = dice_2.roll();
    var computerDice_1 = dice_3.roll();
	var computerDice_2 = dice_4.roll();
    
    var playerResult = playerDice_1 + playerDice_2;
    var computerResult = computerDice_1 + computerDice_2;
    playerResultOutput.innerHTML = "Result is: "+playerResult;
    computerResultOutput.innerHTML = "Result is: "+computerResult;
    
    if(playerResult < computerResult){
        result.innerHTML = "You loose!";
        computerPoints++;
    } else if(playerResult === computerResult) {
        result.innerHTML = "It's a draw";
    } else {
        result.innerHTML = "You win!";
        playerPoints++;
        p1.points++;
    }
    
    playerDice1.innerHTML = "Dice 1 = "+playerDice_1;
    playerDice2.innerHTML = "Dice 2 = "+playerDice_2;
    computerDice1.innerHTML = "Dice 1 = "+computerDice_1;
    computerDice2.innerHTML = "Dice 2 = "+computerDice_2;
    playerScore.innerHTML = "Your score: " + playerPoints;
    computerScore.innerHTML = "Computer score: " + computerPoints;
    
    // Store
    localStorage.setItem("name", playerName);
    localStorage.setItem("computerPoints", computerPoints);
    localStorage.setItem("playerPoints", playerPoints);
    
}

function clearData(){
    localStorage.clear();
    location.reload();
}

buttonPlayAgain.addEventListener('click', play);
buttonClearData.addEventListener('click', clearData);

