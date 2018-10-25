

class board {

	constructor(width, height) {
		
		
		var arraySize = width * height;
		var fields = new Array(arraySize);
		for(var i = 0; i < arraySize; i++) {
			fields[i] = "";
		}

		this.fields = fields;
	}

	setValue(index, symbol) {
		if(board != null) {
			board[index] = symbol;
			return true;
		}
		return false;
	}

	getValue(index) {
		if(board != null) {
			return board[index];
		}
		//throw error
	}
}

module.exports = board;