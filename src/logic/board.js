//board.js
class Board {
	constructor(fields) {
		this.fields = ["", "", "", "", "", "", "", "", ""];
	}

	setValue(index, symbol) {
		if(this.fields != null || index < 9) {
			this.fields[index] = symbol;
			return true;
		}
		return false;
	}

	getValue(index) {
		if(this.fields != null || index < 9) {
			return this.fields[index];
		}
		//throw error
	}
}

module.exports = Board;