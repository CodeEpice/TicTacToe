class Player{
	constructor(symbol) {
		this.symbol = symbol.toLowerCase();
		var score = 0;
	}
	getSymbol(){
		return this.symbol;
	}
}

module.exports = Player;