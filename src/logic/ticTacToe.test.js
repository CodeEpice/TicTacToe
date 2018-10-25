// ticTacToe.test.js
const player = require("./player");
const playerSwap = require("./ticTacToe");
const board = require("./board");

let b = new board(3,3);

test("Should return the given symbol", () => {
	expect(playerSwap("x")).toBe("o");
});

test("Should return the given symbol", () => {
	expect(playerSwap("o")).toBe("x");
});

test("Should show correct player symbol", () => {
	let x = new player("X");
	expect(x.getSymbol()).toBe("x");
});

test("Should return score as 1", () => {
	let x = new player("X");
	x.incrementScore();
	expect(x.getScore()).toBe(1);
});

test("Should return true if value could be set", () => {
	expect(b.setValue(4,"x")).toBe(true);
});

test("Should return true if value could be set", () => {
	expect(b.getValue(4)).toBe("x");
});
