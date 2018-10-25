//ticTacToe.js
//import board from "./board.js";

//const board = new board(3,3);

//const board = require("./board")

function playerSwap(symbol) {
	
	if(symbol == "x") {
		return "o";
	}

	return "x"; 
}



module.exports = playerSwap;

