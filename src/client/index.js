const TicTacToe = require("../logic/ticTacToe.js");
var gameOver = false;
var currPlayer;
var boxes = document.getElementsByTagName('td');
var gameResult = document.getElementById('gameResult');

window.onload = function() {
	for(var i = 0; i < boxes.length; i++) {
		boxes[i].addEventListener('click', boxClicked);
	}
}

document.getElementById("myButton").onclick = function() {
	fetch("/api/TicTacToe/reset")
    .then((resp) => resp.json())
    .then((resp) => {
        console.log(resp);
    })
    for(var i = 0; i < boxes.length; i++) {
        boxes[i].innerHTML = "";
    }
    gameResult.innerHTML = "";
    gameOver = false;

};

function boxClicked(boxes) {
	
    if(!gameOver && this.innerHTML === "") {
        var index = this.id;
        fetch("/api/TicTacToe/currentPlayerTurn")
        .then((resp) => resp.json())
        .then((resp) => {
            currPlayer = resp.symbol;
        })
        fetch("/api/TicTacToe/move/" + index)
        .then((resp) => resp.json())
        .then((resp) => {
            console.log(resp);
            this.innerHTML = resp.symbol;
        })
	    fetch("/api/TicTacToe/gameState")
	    .then((resp) => resp.json())
	    .then((resp) => {
	        console.log(resp);
	        gameOver = resp.gameOver;
	        if(resp.gameOver) {
	            if(resp.tie) {
	                console.log("It's a tie!");
	                gameResult.innerHTML = "It's a tie!";
	            }
	            else {
	            	console.log("Player " + currPlayer.toUpperCase() + " Won!");
	            	gameResult.innerHTML = "Player " + currPlayer.toUpperCase() + " Won!";
                    displayScores();
	            }
	        }
	    })
	}
}

function displayScores() {

    var xscore = document.getElementById('xscore');
    var oscore = document.getElementById('oscore');

    fetch("/api/TicTacToe")
    .then((resp) => resp.json())
    .then((resp) => {
        xscore.innerHTML = resp.oscore;
        oscore.innerHTML = resp.xscore;
    })
}

