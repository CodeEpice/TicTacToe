// ticTacToe.test.js
const player = require("./player");
const board = require("./board");
const ticTacToe = require("./ticTacToe");

let b = new board(3,3);
let x = new player("X");


test("Should return the given symbol", () => {
	const t = new ticTacToe();
	expect(t.playerSwap("x")).toBe("o");
});

test("Should return the given symbol", () => {
	const t = new ticTacToe();
	expect(t.playerSwap("o")).toBe("x");
});

test("Should show correct player symbol", () => {
	expect(x.getSymbol()).toBe("x");
});

test("Should return score as 1", () => {
	x.incrementScore();
	expect(x.getScore()).toBe(1);
});

test("Should return true if value could be set", () => {
	expect(b.setValue(5,"x")).toBe(true);
});

test("Should return true if value could be set", () => {
	expect(b.getValue(5)).toBe("x");
});

test("Should return player X symbol from ticTacToe", () => {
	const t = new ticTacToe();
	expect(t.playerX.getSymbol()).toBe("x");
});

