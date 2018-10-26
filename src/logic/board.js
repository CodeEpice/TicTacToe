//board.js
class Board {
	constructor(width, height, fields) {
		var arraySize = width * height;
		var fields = [];
		for(var i = 0; i < arraySize; i++) {
			fields[i] = "";
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
	if(this.fields[index] === "") {
	  return false;
	}
	return true;
	}
}

module.exports = Board;