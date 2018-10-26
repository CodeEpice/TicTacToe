//board.js
class board {

	constructor(width, height, fields) {
		var arraySize = width * height;
		var fields = new Array(arraySize);
		for(var i = 0; i < arraySize; i++) {
			fields[i] = "";
		}

		this.fields = fields;
	}

	setValue(index, symbol) {
		if(this.fields != null) {
			this.fields[index] = symbol;
			return true;
		}
		return false;
	}

	getValue(index) {
		if(this.fields != null) {
			return this.fields[index];
		}
		//throw error
	}
}

module.exports = board;