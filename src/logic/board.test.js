//board.test.js
const Board = require('./board');

test("Should fill the board with empty fields", () => {
	var b = new Board(5, 5);
	expect(b.fields.length).toBe(25);
});

test("Should return true if value could be set", () => {
	var b = new Board(3, 3);
	expect(b.setValue(5,"x")).toBe(true);
});

test("Should return true if value could be set", () => {
	var b = new Board(3, 3);
	expect(b.setValue(1,"x")).toBe(true);
	expect(b.getValue(1)).toBe("x");
});

