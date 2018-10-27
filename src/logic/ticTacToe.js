//ticTacToe.js
const Player = require("./player.js");
const Board = require("./board.js");

class TTT {
	constructor() {
		this.grid = new Board(3,3);
		this.playerX = new Player("x");
		this.playerO = new Player("o");
		this.gameOver = false;
		this.tie = false;
		this.turnCount = 1;
	}

	match(a, b, c) {
		if(this.grid.fields[a] === "x" || this.grid.fields[a] === "o") {
			return this.grid.fields[a] === this.grid.fields[b] && this.grid.fields[b] === this.grid.fields[c];
		}
  	}

	winCheck() {
		if( this.match(0,1,2) || this.match(3,4,5) || 
			this.match(6,7,8) || this.match(0,3,6) || 
			this.match(1,4,7) || this.match(2,5,8) || 
			this.match(0,4,8) || this.match(2,4,6))
		{
			this.gameOver = true;
		}
		else {
			if(this.turnCount === this.grid.fields.length + 1) {
				this.tie = true;
				this.gameOver = true;
			}		
		}
	}

	move(index) {
    	var symbol;
		// We check to see if it's O or X's turn.
		if(!this.grid.isChecked(index) || !gameOver) {
			if(this.turnCount % 2 === 0) {
        		symbol = this.playerO.symbol;
				this.grid.setValue(index, symbol);
			}
			else {
      			symbol = this.playerX.symbol;
				this.grid.setValue(index, symbol);
			}
			this.turnCount++;
			this.winCheck();
		}
    	return symbol;
	}

	currentPlayerTurn() {
		if(this.turnCount % 2 === 0) {
			return this.playerO.symbol;
		}
		else {
			return this.playerX.symbol;
		}
	}

	reset() {
		for(var i = 0; i < this.grid.fields.length; i++) {
			this.grid.setValue(i, "");
		}
		this.gameOver = false;
		this.tie = false;
		this.turnCount = 1;
	}
}

module.exports = TTT;