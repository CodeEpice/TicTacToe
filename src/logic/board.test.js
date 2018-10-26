//board.test.js
const Board = require('./board');

test("Should return true if value could be set", () => {
	var b = new Board();
	expect(b.setValue(5,"x")).toBe(true);
});

test("Should return true if value could be set", () => {
	var b = new Board();
	expect(b.setValue(1,"x")).toBe(true);
	expect(b.getValue(1)).toBe("x");
});