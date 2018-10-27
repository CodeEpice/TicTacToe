const TicTacToe = require("../logic/ticTacToe.js");

document.getElementById("myButton").onclick = function() {
    var sym = document.getElementById("symbol").innerHTML;
    console.log(sym);
    fetch("/api/TicTacToe/currentPlayerTurn")
    .then((resp) => resp.json())
    .then((resp) => {
    	console.log(resp); 
    	 document.getElementById("symbol").innerHTML = resp.symbol;
    })
};

var boxes = document.getElementsByTagName('td');

window.onload = function() {
	for(var i = 0; i < boxes.length; i++) {
		boxes[i].addEventListener('click', boxClicked);
	}
}

function boxClicked(boxes) {
	var index = this.id;
	fetch("/api/TicTacToe/move/" + index)
    .then((resp) => resp.json())
    .then((resp) => {
    	console.log(resp);
    	this.innerHTML = resp.symbol;
    })
}