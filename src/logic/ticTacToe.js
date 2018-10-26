//ticTacToe.js
const Player = require('./player.js');
const Board = require('./board.js');

class TTT {
	constructor() {
		this.grid = new Board();
		this.playerX = new Player("x");
		this.playerO = new Player("o");
		this.gameOver = false;
	}

	match(a, b, c) {
      return this.grid[a] === this.grid[b] && this.grid[b] === this.grid[c];
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
			this.gameOver = false;
		}

	}

  isChecked(index) {
    if(this.grid[index] === "") {
      return false;
    }
    return true;
  }

	playerSwap(symbol) {
		if(symbol == "x") {
			return "o";
		}

		return "x"; 
	}
}

 module.exports = TTT;