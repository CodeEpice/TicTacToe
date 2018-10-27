//board.js
class Board {
	constructor(width, height) {
		var arraySize = width * height;
		var fields = [];
		for(var i = 0; i < arraySize; i++) {
			fields.push("");
		}
		this.fields = fields;
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

	isChecked(index) {
		if(this.fields[index] === "x" || this.fields[index] === "o" ) {
		 	return true;
		}
		else {
			return false;
		}
	}
}

module.exports = Board;