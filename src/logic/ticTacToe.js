//ticTacToe.js
const board = require("./board");
const player = require("./player");

class ticTacToe{
	constuctor(playerX, playerO){
		this.newBoard = new board(3,3);
		this.playerX = new player("X");
		this.playerO = new player("O"); 
	}

	playerSwap(symbol) {
		if(symbol == "x") {
			return "o";
		}

		return "x"; 
	}
}

module.exports = ticTacToe;