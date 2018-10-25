// ticTacToe.test.js
const player = require("./player");
const playerSwap = require("./ticTacToe")

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