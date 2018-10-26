class player{
	constructor(symbol) {
		this.symbol = symbol.toLowerCase();
		this.score = 0;
	}

	getSymbol(){
		return this.symbol;
	}	

	incrementScore(){
		this.score++;
	}
	
	getScore(){
		return this.score;
	}
}

module.exports = player;