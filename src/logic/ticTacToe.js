//ticTacToe.js
const Player = require('./player.js');
const Board = require('./board.js');

class TTT {
	constructor() {
		this.grid = new Board();
		this.playerX = new Player("x");
		this.playerO = new Player("o");
	}

	playerSwap(symbol) {
		if(symbol == "x") {
			return "o";
		}

		return "x"; 
	}
}

 module.exports = TTT;