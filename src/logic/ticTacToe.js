//ticTacToe.js
const Player = require("./player.js");
const Board = require("./board.js");

class TTT {
	constructor() {
		this.grid = new Board();
		this.playerX = new Player("x");
		this.playerO = new Player("o");
		this.gameOver = false;
		this.tie = false;
		this.turnCount = 1;
	}

	match(a, b, c) {
      if(this.grid[a] != "") {
        return this.grid[a] === this.grid[b] && this.grid[b] === this.grid[c];
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
			if(turnCount === 9) {
				this.gameOver = true;
				this.tie = true;
			}
			this.gameOver = false;
		}
	}

	move(index) {
		// We check to see if it's O or X's turn.
		if(!this.grid.isChecked(index) || !gameOver) {
			if(this.turnCount % 2 === 0) {
				this.grid.setValue(index, this.playerO.symbol);
			}
			else {
				this.grid.setValue(index, this.playerX.symbol);
			}
			this.turnCount++;
			this.winCheck();
		}
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
  }
}

 module.exports = TTT;