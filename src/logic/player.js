//player.js
class Player{
	constructor(symbol) {
		this.symbol = symbol.toLowerCase();
		this.score = 0;
	}

	incrementScore(){
		this.score++;
	}
}

module.exports = Player;