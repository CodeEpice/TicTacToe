//ticTacToe.js

function playerSwap(symbol) {
	
	if(symbol == "x") {
		return "o";
	}

	return "x"; 
}

module.exports = playerSwap;